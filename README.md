# Datahub

It is:

- CouchDB
- ElasticSearch
- CouchDB-to-ElasticSearch river (all dbs)
- CouchDB-to-CouchDB history (saves all doc revs in it own db (\_history))
- Some documentation

Run on docker:

    docker run -d -P -v /var/lib/couchdb:/var/lib/couchdb -t cncflora/datahub

## License

Apache License 2.0

