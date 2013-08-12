exports.listSchema = {
    "type":"object",
    "properties": {
        "name": { "type":"string"},
        "description":{"type":"string"},
        "taxons": {
            "type":"array",
            "items": {
                "type":"object",
                "properties": {
                    "family": {type:"string"},
                    "taxonRank": {type:"string", enum:["family","genus","species","subspecies","variety"]},
                    "scientificName": {type:"string"},
                    "scientificNameAuthorship":{type:"string"},
                    "taxonID":{"type":"string"}
                }
            }
        }
    }
};
