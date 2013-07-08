function(){
    doNotValidate({metadata: {type: "taxon"}});
    doNotValidate({
            metadata: {type:"taxon"},
            _id: "lg",
            kingdom: "X",
            phylum: "Z",
            "class": "W",
            order:"Y",
            family: "Acanthaceae",
            genus: "longiflorae",
            scientificName: "Longiflora brasiliensis S.Profice",
            scientificNameAuthorship: "S.Profice",
            acceptedNameUsage: "Longiflora brasiliensis S.Profice",
            acceptedNameUsageID: "lg"
        });
    validate({
            metadata: {type:"taxon"},
            _id: "urn:lsid:cncflora.jbrj.gov.br:taxon:acanthaceae:longiflorae:brasiliensis",
            kingdom: "X",
            phylum: "Z",
            "class": "W",
            order:"Y",
            family: "Acanthaceae",
            genus: "longiflorae",
            scientificName: "Longiflora brasiliensis S.Profice",
            scientificNameAuthorship: "S.Profice",
            acceptedNameUsage: "Longiflora brasiliensis S.Profice",
            acceptedNameUsageID: "lg"
        });
}
