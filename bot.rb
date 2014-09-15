#!/usr/bin/env ruby

# a bot is uniq in it's arguments
require 'base64'
@id = Base64.encode64("#{ARGV[0]}+#{ARGV[1]}").gsub("==","").gsub("\n","")

# Ensure no overlap
exit 1 unless File.new("/tmp/bot_#{@id}.lock", "a").flock(File::LOCK_EX | File::LOCK_NB) 

require 'net/http'
require 'uri'
require 'json'

def get(uri)
    JSON.parse(Net::HTTP.get(URI(uri)))
end

def put(uri,doc) 
    uri = URI.parse(uri)
    header = {'Content-Type'=> 'application/json'}
    http = Net::HTTP.new(uri.host, uri.port)
    request = Net::HTTP::Put.new(uri.request_uri, header)
    request.body = doc.to_json
    response = http.request(request)
    JSON.parse(response.body)
end

def post(uri,doc) 
    uri = URI.parse(uri)
    header = {'Content-Type'=> 'application/json'}
    http = Net::HTTP.new(uri.host, uri.port)
    request = Net::HTTP::Post.new(uri.request_uri, header)
    request.body = doc.to_json
    response = http.request(request)
    JSON.parse(response.body)
end

def delete(uri)
    uri = URI.parse(uri)
    http = Net::HTTP.new(uri.host, uri.port)
    request = Net::HTTP::Delete.new(uri.request_uri)
    response = http.request(request)
    JSON.parse(response.body)
end

def onchange(db,change)
    if change["doc"].has_key?("metadata") && !change["doc"].has_key?("deleted")
        # to history
        doc = change["doc"].clone
        doc["_id"] = "#{doc["_id"]}:#{doc["_rev"]}"
        doc.delete("_rev")
        doc.delete("_attachments")
        response = post("#{@couch}/#{db}_history",doc)
        puts response
        
        # to elasticsearch
        doc = change["doc"].clone
        doc["id"] = doc["_id"]
        doc["rev"] = doc["_rev"]
        doc.delete("_id")
        doc.delete("_rev")
        doc.delete("_attachments")
        response = post("#{@es}/#{db}/#{doc["metadata"]["type"]}/#{URI.encode(doc["id"])}",doc)
        puts response
    elsif change["doc"].has_key?("_deleted")
        # delete from es
        doc = change["doc"].clone
        q = URI.encode("id:\"#{doc["_id"]}\"");
        response = delete("#{@es}/#{db}/_query?q=#{q}")
        puts response
    end
end

def listen_changes(db)
    puts "listen #{db}"
    while true do
        # create last_seq if not exists
        system("echo 0 > /tmp/changes_#{db}.last_seq") unless File.exists?("/tmp/changes_#{db}.last_seq") 

        # reads last sequence
        last_file = File.open("/tmp/changes_#{db}.last_seq",'r');
        last_seq = last_file.gets.to_i;
        last_file.close

        # get latest changes
        changes_uri = URI("#{@couch}/#{db}/_changes?since=#{last_seq}&limit=500&feed=longpoll&include_docs=true");
        changes = JSON.parse(Net::HTTP.get(changes_uri))['results']
        changes.each { |change| 
            onchange(db,change)
            last_seq = change["seq"]
        }

        # writes last_seq
        system("echo #{last_seq} > /tmp/changes_#{db}.last_seq")
    end
end

puts "Starting..."

sleep 10

# read args
@couch = ARGV[0] || "http://localhost:5984";
@es = ARGV[1] || "http://localhost:9200";

# hold the threads
dbs_changes = {}

# listen dbs 
dbs_thread = Thread.new do
    while true do
        update = get("#{@couch}/_db_updates?feed=longpoll");
        puts update
        Thread.new do
            ok = update["ok"]
            db = update["db_name"]
            type = update["type"]
            if ok && !db.start_with?("_") && !db.end_with?("_history") then
                if type == "created" then
                    puts "DB created: #{db}"
                    puts put("#{@es}/#{db}",{});
                    puts put("#{@couch}/#{db}_history",{});
                    system("echo 0 > /tmp/changes_#{db}.last_seq")
                    dbs_changes[db] = Thread.new do
                        listen_changes(db)
                    end
                elsif type == 'deleted'
                    puts "DB deleted: #{db}"
                    dbs_changes[db].stop();
                    puts delete("#{@es}/#{db}");
                    puts delete("#{@couch}/#{db}_history");
                    system("echo 0 > /tmp/changes_#{db}.last_seq")
                end
            end
        end
    end
end

# initial run
get("#{@couch}/_all_dbs")
     .select { |db| !db.start_with?("_") && !db.end_with?("_history")}
     .each { |db| 
        puts "DB existed: #{db}"
        # create index and history if not exists
        puts put("#{@es}/#{db}",{});
        puts put("#{@couch}/#{db}_history",{});

        dbs_changes[db] = Thread.new do
            listen_changes(db)
        end
     }
        

start = Time.now.to_i
puts "Started #{start}"
time_span = (3 * 60 * 60)
while Time.now.to_i < start + time_span
    sleep 10
end

puts "Ended #{Time.now.to_i}"

