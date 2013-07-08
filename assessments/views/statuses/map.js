function(doc) {
    if(doc.metadata.type == 'assessment') {
        var crits = doc.criteria.match(/[A-Z]/g);
        emit(doc.category,doc);
        for(var i in crits) {
            emit(doc.category+":"+crits[i],doc);
            emit(crits[i],doc);
        }
    }
}
