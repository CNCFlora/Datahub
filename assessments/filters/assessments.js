function(doc,req) {
    return typeof doc.metadata != 'undefined' && doc.metadata.type == 'assessment';
}
