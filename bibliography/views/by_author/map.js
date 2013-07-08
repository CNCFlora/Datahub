function(doc) {
    if(doc.metadata.type == "biblio") {
        for(var i in doc.author) {
            emit(doc.author[i].name,doc);
        }
    }
}
