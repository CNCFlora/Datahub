(function(doc) {
    if(doc.metadata.type == 'image') {
        if(doc.metadata.valid) {
            var parts = doc.folder.split(":");
            var prev = "";
            for(var i in parts) {
                emit(prev + parts[i],doc);
                prev += parts[i]+":";
            }
        }
    }
})
