function(doc) {
    if(doc.metadata.type == "taxon") {
        emit(doc.scientificName,doc);
    }
}
