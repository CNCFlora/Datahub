function(doc) {
    if(doc.metadata.type=="profile") {
        emit(doc.taxon.lsid,doc);
    }
}
