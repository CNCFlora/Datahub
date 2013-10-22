function(doc) {
    if(doc.metadata.type == 'assessment') {
        emit(doc.taxon.lsid,doc);
    }
}
