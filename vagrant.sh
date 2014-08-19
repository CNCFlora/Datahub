#!/usr/bin/env bash

add-apt-repository ppa:brightbox/ruby-ng -y
apt-get update
apt-get upgrade -y
apt-get install aptitude wget curl couchdb openjdk-7-jre-headless ruby2.1 apache2 -y

service couchdb stop
sed -i -e 's/;bind_address = 127.0.0.1/bind_address = 0.0.0.0/' /etc/couchdb/local.ini
service couchdb start

wget https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-1.3.1.deb -O /root/elasticsearch-1.3.1.deb
dpkg -i /root/elasticsearch-1.3.1.deb
service elasticsearch start

curl -X PUT http://localhost:5984/cncflora

service apache2 stop
rm -Rf /var/www
ln -s /vagrant /var/www
sed -i -e 's/www-data/vagrant/g' /etc/apache2/envvars
cp /vagrant/default.conf /etc/apache2/sites-available/000-default.conf
a2enmod proxy
a2enmod proxy_http
service apache2 start

