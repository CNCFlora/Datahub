function(doc) {
    if(doc.metadata.type == 'assessment' && doc.status == 'published') {
        emit(doc.taxon.scientificName,doc);
    }
}
