function(doc,newDoc,req) {
    if(doc._deleted) {
        return null;
    } else if (typeof doc.metadata != "object") {
        return null;
    } else if(doc.metadata.type == 'assessment') {
        var tv4 = require("libs/tv4").tv4;
        var schema = require("schema/assessment").assessmentSchema;
        if(!tv4.validate(doc,schema)) {
            throw({forbidden: "Must follow schema: "
                    +JSON.stringify(tv4.error, null, 4)});
        }
    }
}
