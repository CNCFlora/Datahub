#!/bin/bash
docker run -d -p 5984:5984 -p 2323:22 -name datahub cncflora/datahub /root/start.sh

