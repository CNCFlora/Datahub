function(doc) {
    if(doc.metadata.type == "taxon" && doc.taxonomicStatus == "synonym") {
        emit(doc.acceptedNameUsageID,doc);
    }
}
