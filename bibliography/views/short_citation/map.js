function(doc) {
    if(doc.metadata.type == 'biblio' && doc.shortCitation.length >= 1) {
        emit(doc.shortCitation,doc);
    }
}
