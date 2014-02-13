#!/bin/bash

# register this service on etcd

[[ ! $APP ]]  && APP="couchdb"
[[ ! $PORT ]] && PORT=5984
[[ ! $HOST ]] && HOST="$(hostname -I | awk '{print $2}')"
[[ ! $EHOST ]] && EHOST="$(netstat -rn | grep "^0.0.0.0 " | cut -d " " -f10)"
[[ ! $ETCD  ]] && ETCD="http://${EHOST}:4001"

curl -L $ETCD/v2/keys/$APP/host -d value="$HOST" -X PUT
curl -L $ETCD/v2/keys/$APP/port -d value="$PORT" -X PUT
curl -L $ETCD/v2/keys/$APP/startup -d value="$(date)" -X PUT
curl -L $ETCD/v2/keys/$APP/timestamp -d value="$(date +%s)" -X PUT

