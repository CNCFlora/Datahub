#!/usr/bin/env bash

apt-get update
apt-get upgrade -y
apt-get install aptitude wget curl ruby2.0 couchdb openjdk-7-jre-headless -y

service couchdb stop
sed -i -e 's/;bind_address = 127.0.0.1/bind_address = 0.0.0.0/' /etc/couchdb/local.ini
service couchdb start

wget https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-1.2.0.deb -O /root/elasticsearch-1.2.0.deb
dpkg -i /root/elasticsearch-1.2.0.deb

curl -X PUT http://localhost:5984/cncflora
curl -X PUT http://localhost:5984/cncflora_history

