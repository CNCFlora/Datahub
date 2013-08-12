exports.taxonSchema = {
    type: "object",
    properties: {
        "taxonID": {"type":"string"},
        "kingdom": {type:"string"},
        "phylum": {type:"string"},
        "class": {type:"string"},
        "order": {type:"string"},
        "family": {type:"string"},
        "genus": {type:"string"},
        "specificEpithet": {type:"string"},
        "infraspecificEpithet": {type:"string"},
        "taxonRank": {type:"string", enum:["kingdom","phylum","class","order","family","genus","species","subspecies","variety"]},
        "scientificName": {type:"string"},
        "scientificNameAuthorship":{type:"string"},
        "taxonomicStatus": {type:"string", enum: ["accepted","synonym","misapplied","proParteSynonym","homotypicSynonym","heterotypicSynonym"]},
        "nomenclaturalStatus": {type:"string"},
        "acceptedNameUsage": {type:"string"},
        "acceptedNameUsageID": {type:"string"},
        "ipni":{type:"string"},
        "fbid":{type:"string"}
    },
    required: ["taxonID","kingdom","phylum","class","order","family","genus","scientificName","taxonomicStatus"]
};
