function(doc,oldDoc,user,sec) {
    if(user.roles.indexOf('admin') == -1 && user.roles.indexOf("_admin") == -1 && user.roles.indexOf('writer') == -1)  {
        throw({forbidden: 'You are not authorized to write to this database.'});
    }
    if(doc._deleted) return;
    if(typeof doc.metadata != "object") {
        throw({forbidden: "Must have proper metadata. "});
    }
    var tv4 = require("libs/tv4").tv4;
    var schema = require("schema/metadata").metadataSchema;
    if(!tv4.validate(doc.metadata,schema)) {
        throw({forbidden: "Metadata must follow schema: "+ JSON.stringify( tv4.error,null,4)});
    }
}
