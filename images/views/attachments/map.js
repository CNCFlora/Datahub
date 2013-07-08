function(doc) {
    if(doc.metadata.type == 'image') {
        emit(doc.metadata.title,doc);
    }
}
