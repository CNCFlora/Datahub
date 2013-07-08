function(doc,req) {
    return typeof doc.metadata != 'undefined' && doc.metadata.type == req.query.type;
}

