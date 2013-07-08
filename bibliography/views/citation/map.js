function(doc) {
    if(doc.metadata.type == 'biblio' && doc.fullCitation.length >= 1) {
        emit(doc.fullCitation,doc);
    }
}
