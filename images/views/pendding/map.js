(function(doc) {
    if(doc.metadata.type == 'image') {
        if(!doc.metadata.valid) {
            emit(null,doc);
        }
    }
})
