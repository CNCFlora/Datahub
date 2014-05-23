#!/bin/bash

service elasticsearch start
service apache2 start
couchdb > /dev/null &

while true ; do
    /root/bot.rb http://localhost:5984 http://localhost:9200 > /dev/null 2>&1
done

