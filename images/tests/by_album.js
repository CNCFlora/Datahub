function() {
    var input = [
        {metadata:{type:"image"},folder:"A",_id:"1"},
        {metadata:{type:"image"},folder:"A/B",_id:"2"},
        {metadata:{type:"image"},folder:"B",_id:"3"}
    ];

    var output = [
        ["A", {metadata:{type:"image"},folder:"A",_id:"1"} ],
        ["A/B", {metadata:{type:"image"},folder:"A/B",_id:"2"} ],
        ["B", {metadata:{type:"image"},folder:"B",_id:"3"} ]
    ];

    var reduced = [
        ["A",1],
        ["A/B",1],
        ["B",1]
    ];

    var view = requireView("by_album");
    emits(view,input,output);
    reduces(view,input,reduced);

}
