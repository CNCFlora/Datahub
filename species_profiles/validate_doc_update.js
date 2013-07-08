function(doc,newDoc,req) {
    if(doc._deleted) return;
    if(doc.metadata.type == 'profile') {
        var tv4 = require("libs/tv4").tv4;
        var schema = require("schema/profile").profileSchema;
        if(!tv4.validate(doc,schema)) {
            throw({forbidden: "Must follow schema: "
                    +JSON.stringify(tv4.error, null, 4)});
        }
    }
}
