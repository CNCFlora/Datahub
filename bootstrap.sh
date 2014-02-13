#!/bin/bash

# basic utils and couchdb
aptitude update
aptitude install git curl tmux couchdb libgd2-noxpm -y

# setup couchdb
sed -i -e 's/;bind_address.*/bind_address = 0.0.0.0/' /etc/couchdb/local.ini 
sed -i -e 's/;port/port/' /etc/couchdb/local.ini 
curl -X PUT "http://localhost:5984/cncflora"
curl -X PUT "http://localhost:5984/cncflora_test"

# setup couchdb startup
echo 'echo $(date) > /var/log/rc.log' > /etc/rc.log
echo "service couchdb start >> /var/log/rc.log 2>&1 " >> /etc/rc.local
echo 'SUBSYSTEM=="bdi",ACTION=="add",RUN+="/vagrant/register.sh >> /var/log/rc.log 2>&1"' > /etc/udev/rules.d/50-vagrant.rules
service couchdb start

# install the datahub design docs
cd /vagrant
for f in $(ls -d */); do
    ./erica push $f http://localhost:5984/cncflora
    ./erica push $f http://localhost:5984/cncflora_test
done;

#register couchdb
/vagrant/register.sh

