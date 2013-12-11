function(doc) {
    if(doc.metadata.type == 'assessment') {
        if(typeof doc.metadata.status == 'string') {
            emit(doc.taxon.lsid,doc);
        }
    }
}
