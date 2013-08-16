function(doc) {
    if(doc._deleted) {
        return null;
    } else if (typeof doc.metadata != "object") {
        return null;
    } else if(doc.metadata.type == "list"){
        var tv4 = require("libs/tv4").tv4;
        var schema = require("schema/list").listSchema;
        if(!tv4.validate(doc,schema)) {
            throw({forbidden: "Must follow schema: "
                    +JSON.stringify(tv4.error, null, 4)});
        }
    } else if(doc.metadata.type == "taxon"){
        var tv4 = require("libs/tv4").tv4;
        var schema = require("schema/taxon").taxonSchema;
        if(!tv4.validate(doc,schema)) {
            throw({forbidden: "Must follow schema: "
                    +JSON.stringify(tv4.error, null, 4)});
        }
        if(doc.family != doc.family.toUpperCase()) {
            throw({forbidden: "Family must be upper case"});
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
