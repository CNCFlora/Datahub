function(doc) {
    if(doc.metadata.type =='taxon') {
        if(doc.taxonomicStatus == "accepted") {
            emit(doc.family.toUpperCase(),doc);
        }
    }
}
