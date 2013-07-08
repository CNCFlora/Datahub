function() {
    var view = requireView('by_taxon');

    var assess = {metadata: {type: "assessment"}, taxon: "a:taxon",status:"published"};
    var barAssess = {metadata: {type: "assessment"}, taxon: "a:taxon",status:"open"};
    var notAssess = {metadata: {type: "taxon"},taxon:"b:taxon"};

    emits(view,[assess,barAssess,notAssess],[["a:taxon",assess]]);
}
