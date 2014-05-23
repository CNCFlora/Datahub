#!/bin/bash

service elasticsearch start
service apache2 start
couchdb &

while true ; do
    /root/bot.rb http://localhost:5984 http://localhost:9200 > /dev/null
done

