(function(doc) {
    for(var i in doc.metadata) {
        emit([i,doc.metadata[i]],doc);
    }
})
