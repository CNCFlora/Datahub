function() {
    var input = [
        {metadata:{type:"taxon"},family:"A"},
        {metadata:{type:"taxon"},family:"A"},
        {metadata:{type:"taxon"},family:"B"}
    ];

    var output = [
        ["A", {metadata:{type:"taxon"},family:"A"} ],
        ["A", {metadata:{type:"taxon"},family:"A"} ],
        ["B", {metadata:{type:"taxon"},family:"B"} ]
    ];

    var reduce = [
        ["A",2],
        ["B",1]
    ];

    var view = requireView("families");
    emits(view,input,output);
    reduces(view,input,reduce);

}
