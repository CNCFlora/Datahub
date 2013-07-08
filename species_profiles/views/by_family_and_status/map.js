function(doc) {
    if(doc.metadata.type=="profile") {
        emit([doc.taxon.family,doc.metadata.status],doc);
    }
}
