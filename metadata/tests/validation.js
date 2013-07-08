function() {
    validate({metadata:{ 
                identifier: "a",
                contributor: "",
                created: 123,
                language: "pt",
                type:"taxon",
                valid: 321
            },_id:"hello"});
    doNotValidate({_id:"hello"});
}
