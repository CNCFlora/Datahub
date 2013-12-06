function(doc) {
    if(doc.metadata.type == 'assessment' && doc.metadata.status == 'published') {
        emit(doc.taxon.scientificName,doc);
    }
}
