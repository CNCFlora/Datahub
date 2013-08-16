function(doc) {
    if(doc.metadata.type == 'list') {
        emit(doc._id,{name:doc.name,description:doc.description,metadata:doc.metadata,_id:doc._id,_rev:doc._rev});
    }
}
