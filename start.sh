#!/bin/bash

service elasticsearch start
couchdb  &

cd /root
unicorn &

while true ; do
    /root/bot.rb http://localhost:5984 http://localhost:9200
done

