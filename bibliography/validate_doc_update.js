function(doc) {
    if(doc._deleted) {
        return null;
    } else if(doc.metadata.type == "biblio"){
        var tv4 = require("libs/tv4").tv4;
        var schema = require("schema/biblio").biblioSchema;
        if(!tv4.validate(doc,schema)) {
            throw({forbidden: "Must follow schema: "
                    +JSON.stringify(tv4.error, null, 4)});
        }
    }
}
