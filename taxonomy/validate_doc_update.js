function(doc) {
    if(doc._deleted) {
        return null;
    } else if (typeof doc.metadata != "object") {
        return null;
    } else if(doc.metadata.type == "taxon"){
        var tv4 = require("libs/tv4").tv4;
        var schema = require("schema/taxon").taxonSchema;
        if(!tv4.validate(doc,schema)) {
            throw({forbidden: "Must follow schema: "
                    +JSON.stringify(tv4.error, null, 4)});
        }
        var lsid = "urn:lsid:cncflora.jbrj.gov.br:taxon:"+doc.family+":"+doc.genus+":"+doc.specificEpithet;
        if(typeof doc.infraspecificEphitet == 'string') {
            lsid = lsid +":"+ doc.infraspecificEpithet;
        }
        lsid = lsid.toLowerCase();
        if(doc._id != lsid || doc.metadata.identifier != lsid) {
            throw({forbidden: "Malformed identifier, should be: "+lsid});
        }
        if(doc.taxonomicStatus != "accepted") {
            if(typeof doc.acceptedNameUsageID != "string") {
                throw({forbidden: "Non accepted names must point to a valid acceptedNameUsageID"});
            }
        }
    } else if(doc.metadata.type == "checklist") {
        var tv4 = require("libs/tv4").tv4;
        var schema = require("schema/checklist").checklistSchema;
        if(!tv4.validate(doc,schema)) {
            throw({forbidden: "Must follow schema: "
                    +JSON.stringify(tv4.error, null, 4)});
        }
    }
}
