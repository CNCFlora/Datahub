#!/bin/bash

nohup /opt/start_couch &
./register.sh

/usr/sbin/sshd -D
