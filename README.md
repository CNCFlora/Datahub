# CNCFlora APIs

This project contains the design documents for the APIs provided by and used on the CNCFlora systems.

It is based on [CouchDB](http://couchdb.apache.org), version 1.3+.

It includes the [tv4](https://github.com/geraintluff/tv4) lib to perform json-schema validations.

A running documentation of the APIs can be found at the [cncflora dev portal](http://146.134.16.15:5984/cncflora/_design/docs/index.html);


## Rationale

TODO

## Deploy

We use [erica](https://github.com/benoitc/erica) to manage and push the design-docs to couchdb.

Copy the config.ini-dist file to config.ini, and load it using:

    . config.ini

And push changes using:

    erica push ./* $DEV

Or:

    erica push ./* $PRO


But any other couchapp tool might work.

## Testing

TODO

## License

Distribuited under the Apache License 2.0.

