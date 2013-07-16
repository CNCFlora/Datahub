function() {

    var input = [
        {metadata:{type:"taxon"},family:"A",taxonRank: 'species',taxonomicStatus: 'accepted'},
        {metadata:{type:"taxon"},family:"A",taxonRank: 'species',taxonomicStatus: 'accepted'},
        {metadata:{type:"taxon"},family:"B",taxonRank: 'species',taxonomicStatus: 'accepted'},
        {metadata:{type:"taxon"},family:"C",taxonRank: 'family',taxonomicStatus: 'accepted'},
        {metadata:{type:"taxon"},family:"D",taxonRank: 'species',taxonomicStatus: 'synonym'}
    ];

    var output = [
        ["A", {metadata:{type:"taxon"},family:"A",taxonRank: 'species',taxonomicStatus: 'accepted'} ],
        ["A", {metadata:{type:"taxon"},family:"A",taxonRank: 'species',taxonomicStatus: 'accepted'} ],
        ["B", {metadata:{type:"taxon"},family:"B",taxonRank: 'species',taxonomicStatus: 'accepted'} ],
    ];

    var reduced = [
        ["A",2],
        ["B",1]
    ];

    emits(input,output);
    reduces(reduced);

}
