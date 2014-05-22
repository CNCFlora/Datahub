#!/bin/bash

service elasticsearch start
couchdb  &

#cd /root
#python -m SimpleHTTPServer > /var/log/http.log 2>&1 &

while true ; do
    /root/bot.rb http://localhost:5984 http://localhost:9200
done

