(function(doc) {
    if(doc.metadata.type == 'image') {
        if(typeof doc.tags == 'object') {
            for(var i in doc.tags) {
                emit(doc.tags[i],doc);
            }
        }
    }
})
