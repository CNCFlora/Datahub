function(doc) {
    if(doc.metadata.type =='taxon') {
        if(doc.taxonomicStatus == "accepted" ) {
            if(doc.taxonRank == 'species' || doc.taxonRank == 'subspecies' || doc.taxonRank == 'variety') {
                if(doc.family != null && doc.family.length >= 1) {
                    emit(doc.family.toUpperCase(),doc);
                }
            }
        }
    }
}
