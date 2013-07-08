function() {
    var input = [
        {metadata:{type:"taxon"},family:"A",_id:"1"},
        {metadata:{type:"assessment"},family:"A",_id:"2"},
        {metadata:{type:"taxon"},family:"B",_id:"3"}
    ];

    var output = [
        ["taxon", {metadata:{type:"taxon"},family:"A",_id:"1"} ],
        ["assessment", {metadata:{type:"assessment"},family:"A",_id:"2"} ],
        ["taxon", {metadata:{type:"taxon"},family:"B",_id:"3"} ]
    ];

    var reduce = [
        ["taxon",2],
        ["assessment",1]
    ];

    var view = requireView("by_type");
    emits(view,input,output);
    reduces(view,input,reduce);

}
