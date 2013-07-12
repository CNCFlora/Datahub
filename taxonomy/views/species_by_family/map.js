function(doc) {
    if(doc.metadata.type =='taxon') {
        if(doc.taxonomicStatus == "accepted" ) {
            if(doc.taxonRank == 'species' || doc.taxonRank == 'subspecies' || doc.taxonRank == 'variety') {
                emit(doc.family.toUpperCase(),doc);
            }
        }
    }
}
