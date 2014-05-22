#!/usr/bin/env ruby

# a bot is uniq in it's arguments
require 'base64'
@id = Base64.encode64("#{ARGV[0]}+#{ARGV[1]}").gsub("==","").gsub("\n","")

# Ensure no overlap
exit 1 unless File.new("/tmp/bot_#{@id}.lock", "a").flock(File::LOCK_EX | File::LOCK_NB) 

require 'net/http'
require 'uri'
require 'json'

require_relative 'utils'

puts "Start"

# read args
couch = ARGV[0];
es = ARGV[1];

# all dbs, but specials and history ones
uri = URI("#{couch}/_all_dbs")
dbs = []

if ARGV[2] 
    dbs << ARGV[2]
else
    JSON.parse(Net::HTTP.get(uri))
        .select { |db| !db.start_with?("_") && !db.end_with?("_history")}
        .each { |db| dbs << db}
end

dbs.each { |db|

    # rewrite vars
    id = "#{@id}.#{db}"
    couch = "#{couch}/#{db}"
    es = "#{es}/#{db}"

    # create index if not exists
    put(es,{});
    # create history db if not exists
    put("#{couch}_history",{});

    # create last_seq if not exists
    system("echo 0 > /tmp/#{id}.last_seq") unless File.exists?("/tmp/#{id}.last_seq") 

    # reads last sequence
    last_file = File.open("/tmp/#{id}.last_seq",'r');
    last_seq = last_file.gets.to_i;
    last_file.close

    # get latest changes
    changes_uri = URI("#{couch}/_changes?since=#{last_seq}&limit=500&feed=normal&include_docs=true");
    puts "URL: #{changes_uri}"

    changes = JSON.parse(Net::HTTP.get(changes_uri))['results']

    changes.each { |change| 
        last_seq = change["seq"]

        if change["doc"].has_key?("metadata") && !change["doc"].has_key?("deleted")
            # to history
            doc = change["doc"].clone
            doc["_id"] = "#{doc["_id"]}:#{doc["_rev"]}"
            doc.delete("_rev")
            doc.delete("_attachments")
            response = post("#{couch}_history",doc)
            puts response.body
            
            # to elasticsearch
            doc = change["doc"].clone
            doc["id"] = doc["_id"]
            doc.delete("_id")
            doc.delete("_rev")
            doc.delete("_attachments")
            response = post("#{es}/#{doc["metadata"]["type"]}/#{URI.encode(doc["id"])}",doc)
            puts response.body
        elsif change["doc"].has_key?("_deleted")
            # delete from es
            doc = change["doc"].clone
            r = delete("#{es}/_query?q=id:#{URI.encode(doc["_id"].gsub(":","\\:"))}")
            puts r.body
        end
    }

    # writes last sequence
    system("echo #{last_seq} > /tmp/#{id}.last_seq")

}

puts "Done"

