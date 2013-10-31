exports.profileSchema = {
	"type":"object",
	"properties": {
        "metadata": {
            "type":"object",
            "required":true
        },
        "taxon": {
            "type": "object",
            "properties": {
                "family":{"type":"string"},
                "scientificName":{"type":"string"},
                "scientificNameAuthorship":{"type":"string"},
                "lsid":{"type":"string"}
            }
        },
        "taxonomicNotes": {
            "type":"object",
            "label":"Taxonomic Notes",
            "properties": {
                "notes": {
                    "label": "Notes",
                    "type": "string",
                    "format":"multiline"
                },
                "references": {
                    "type": "array",
                    "label": "References",
                    "items": {
                        "type": "object",
                        "properties": {
                            "citation": {
                                "type":"string",
                                "label": "Citation"
                            },
                            "ref":  {
                                "type": "string",
                                "label": "Ref"
                            }
                        }
                    }
                }
            }
        },
        "economicValue": {
            "type":"object",
            "label":"Economics",
            "properties": {
                "potentialEconomicValue": {
                    "label": "Specie have potential economic value",
                    "type" : "string",
                    "enum" : [null,"yes","no","unkown"]
                },
                "details":{
                    "label":"Details",
                    "type":"string",
                    "format":"multiline"
                },
                "references": {
                    "type": "array",
                    "label": "References",
                    "items": {
                        "type": "object",
                        "properties": {
                            "citation": {
                                "type":"string",
                                "label": "Citation"
                            },
                            "ref":  {
                                "type": "string",
                                "label": "Ref"
                            }
                        }
                    }
                }
            }
        },
        "population": {
            "type":"object",
            "label":"Population",
            "properties": {
                "size": {
                    "type": "object",
                    "label":"Estimated size",
                    "properties": {
                        "type": {"type":"string", "enum":[null,"absolute","range","less then","greater then","circa"]},
                        "minimum": {"type":"number"},
                        "maximum": {"type":"number"},
                        "absolute": {"type":"number"}
                    }
                },
                "numberOfSubpopulations": {
                    "type": "object",
                    "label":"Number of subpopulations",
                    "properties": {
                        "type": {"type":"string", "enum":[null,"absolute","range","less then","greater then","circa"]},
                        "minimum": {"type":"number"},
                        "maximum": {"type":"number"},
                        "absolute": {"type":"number"}
                    }
                },
                "numberOfIndividualsInBiggestSubpopulation": {
                    "type": "object",
                    "label":"Number of individuals in biggest subpopulation",
                    "properties": {
                        "type": {"type":"string", "enum":[null,"absolute","range","less then","greater then","circa"]},
                        "minimum": {"type":"number"},
                        "maximum": {"type":"number"},
                        "absolute": {"type":"number"}
                    }
                },
                "populationalReduction": {
                    "type": "object",
                    "label":"Populational reduction",
                    "properties": {
                        "type": {"type":"string", "enum":[null,"absolute","range","less then","greater then","circa"]},
                        "minimum": {"type":"number"},
                        "maximum": {"type":"number"},
                        "absolute": {"type":"number"}
                    }
                },
                "extremeFluctuation": {
                    "type": "object",
                    "label": "Extreme fluctuation",
                    "properties": {
                        "extremeFluctuation": {
                            "type":"string",
                            "label":"Specie have extreme fluctuation",
                            "enum":[null,"unkown","no","yes"]
                        }
                    }
                },
                "generationTiming": {
                    "type": "object",
                    "label":"Generation timing (in months)",
                    "properties": {
                        "type": {"type":"string", "enum":[null,"absolute","range","less then","greater then","circa"]},
                        "minimum": {"type":"number"},
                        "maximum": {"type":"number"},
                        "absolute": {"type":"number"},
                        "justification": {
                            "type":"string",
                            "label" :"Justification",
                            "format":"multiline"
                        }
                    }
                },
                "resume": {
                    "type":"string",
                    "label":"Population resume",
                    "format":"multiline"
                },
                "references": {
                    "type": "array",
                    "label": "References",
                    "items": {
                        "type": "object",
                        "properties": {
                            "citation": {
                                "type":"string",
                                "label": "Citation"
                            },
                            "ref":  {
                                "type": "string",
                                "label": "Ref"
                            }
                        }
                    }
                }
            }
        },
        "distribution": {
            "label":"Distribution",
            "type":"object",
            "properties": {
                "fragmented": {
                    "label":"Fragmented distribution",
                    "type": "string",
                    "enum":[null,"unkown","yes","no"]
                },
                "eoo": {
                    "label":"Extent of occurrence (in km²)",
                    "type":"number"
                },
                "aoo": {
                    "label":"Area of occupancy (in km²)",
                    "type":"number"
                },
                "altitude": {
                    "type":"object",
                    "label":"Altitude",
                    "properties": {
                        "type": {"type":"string", "enum":[null,"absolute","range","less then","greater then","circa"]},
                        "minimum": {"type":"number"},
                        "maximum": {"type":"number"},
                        "absolute": {"type":"number"}
                    }
                },
                "brasilianEndemic": {
                    "type":"string",
                    "label":"Endemic",
                    "enum":[null,"yes","no","unkown"]
                },
                "resume": { 
                    "label": "Distribution resume",
                    "format": "multiline",
                    "type": "string" 
                },
                "references": {
                    "type": "array",
                    "label": "References",
                    "items": {
                        "type": "object",
                        "properties": {
                            "citation": {
                                "type":"string",
                                "label": "Citation"
                            },
                            "ref":  {
                                "type": "string",
                                "label": "Ref"
                            }
                        }
                    }
                }
            }
        },
        "ecology": {
            "type":"object",
            "label":"Ecology",
            "properties": {
                "lifeForm": {
                    "label":"Life Form",
                    "type":"string",
                    "enum":[null,"","herb","bush","tree","liana","subshrub","small tree"]
                },
                "substratum": {
                    "label":"Substratum",
                    "type":"string",
                    "enum":[null,"","terrestrial","aquatic","rupicolous","saxicolous","epiphytic","hemiepiphytes"]
                },
                "luminosity": {
                    "label":"Luminosity",
                    "type":"string",
                    "enum":[null,"","heliophytic","esciophytic","mesophytic"]
                },
                "longevity": {
                    "label":"Longivity",
                    "type":"string",
                    "enum":[null,"","unkown","anual","bianual","perennial"]
                },
                "fenology": {
                    "label":"Fenology",
                    "type":"string",
                    "enum":[null,"","deciduifolia","semideciduifolia","perenifolia"]
                },
                "clonal": {
                    "label":"Clonal",
                    "type":"string",
                    "enum":[null,"","unkown","yes","no"]
                },
                "resprout": {
                    "label":"Resprout",
                    "type":"string",
                    "enum":[null,"","unkown","yes","no"]
                },
                "habitats": {
                    "label":"Major Habitats",
                    "type":"array",
                    "items": {"type":"string"}
                },
                "biomas": {
                    "label": "Biomas",
                    "type":"array",
                    "items": {"type":"string"}
                },
                "fitofisionomies": {
                    "label":"Fitofisionomies",
                    "type":"array",
                    "items":{"type":"string"}
                },
                "resume": {
                    "label":"Ecological resume",
                    "type":"string",
                    "format": "multiline"
                },
                "references": {
                    "type": "array",
                    "label": "References",
                    "items": {
                        "type": "object",
                        "properties": {
                            "citation": {
                                "type":"string",
                                "label": "Citation"
                            },
                            "ref":  {
                                "type": "string",
                                "label": "Ref"
                            }
                        }
                    }
                }
            }
        },
        "reproduction": {
            "label":"Reproduction",
            "type": "object",
            "properties": {
                "sexualSystem": {
                    "type":"string",
                    "label":"Sexual System",
                    "enum":[null,"","self-compatible","self-incompatible","angopermia","unkown"]
                },
                "system": {
                    "type":"string",
                    "label":"Reproduction System",
                    "enum":[null,"","hermafrodita","monoecious","dioecious","andromonoecious","ginomonóicious","trimonoicious","androidioecious","ginodiecious","trioecious"]
                },
                "strategy": {
                    "type":"string",
                    "label": "Reproduction Strategy",
                    "enum":[null,"","semelpara","iteropara","unknown"]
                },
                "fenology": {
                    "type":"array",
                    "label":"Fenology",
                    "items": {
                        "type":"object",
                        "properties": {
                            "fenology": {
                                "type":"string",
                                "label": "Fenology",
                                "enum":[null,"","flowering","fruiting","unknown"]
                            },
                            "start": {
                                "type":"string",
                                "label":"Start",
                                "enum":[null,"Jan","Fev","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
                            },
                            "end": {
                                "type":"string",
                                "label":"End",
                                "enum":[null,"Jan","Fev","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
                            }
                        }
                    }
                },
                "pollinationSyndrome": {
                    "type":"array",
                    "label":"Pollination Syndrome",
                    "items":{
                        "type":"string",
                        "enum":[null,"anemophily","hidrophily","entomophily","ornitophily","quiropterophily","falenophily","psicophily","melitophily","miophily","cantarophily","malacophily","mamaliophily"]
                    }
                },
                "pollinatorInformation": {
                    "type":"string",
                    "format":"multiline",
                    "label":"Pollinator Information"
                },
                "dispersionSyndrome": {
                    "type":"array",
                    "label":"Disperson Syndrome",
                    "items":{
                        "type":"string",
                        "enum":[null,"anemochory","hidrochory","barochory","zoochory","ornitochory","mamaliochory","mimecochory","quirepterochory","saurochory","ictiochory","endozoochory","sinzoochory"]
                    }
                },
                "dispersorInformation":{
                    "type":"string",
                    "format": "multiline",
                    "label":"Dispersor Information"
                },
                "resume": {
                    "label":"Reproduction resume",
                    "type":"string",
                    "format": "multiline"
                },
                "references": {
                    "type": "array",
                    "label": "References",
                    "items": {
                        "type": "object",
                        "properties": {
                            "citation": {
                                "type":"string",
                                "label": "Citation"
                            },
                            "ref":  {
                                "type": "string",
                                "label": "Ref"
                            }
                        }
                    }
                }
            }
        },
        "threats": {
            "label":"Threats",
            "type":"array",
            "items": {
                "type":"object",
                "properties": {
                    "threat": {
                        "type":"string",
                        "label":"Threat"
                    },
                    "incidence":{
                        "label":"Incidence",
                        "type":"string",
                        "enum":[null,"local","regional","national"]
                    },
                    "severity": {
                        "label":"Severity",
                        "type":"string",
                        "enum":[null,"very low","low","medium","high","very high"]
                    },
                    "reversible": {
                        "label":"Reversible",
                        "type":"boolean"
                    },
                    "ended": {
                        "label":"Ended",
                        "type":"boolean"
                    },
                    "timing": {
                        "label": "Timing",
                        "type": "array",
                        "items":{"type":"string","enum":[null,"past","present","future"]}
                    },
                    "decline": {
                        "label": "Decline",
                        "type": "array",
                        "items":{"type":"string","enum":[null,"locality","habitat","occupancy","occurrence","mature individuals"]}
                    },
                    "details": {
                        "label":"Details",
                        "type": "string",
                        "format":"multiline"
                    },
                    "references": {
                        "type": "array",
                        "label": "References",
                        "items": {
                            "type": "object",
                            "properties": {
                                "citation": {
                                    "type":"string",
                                    "label": "Citation"
                                },
                                "ref":  {
                                    "type": "string",
                                    "label": "Ref"
                                }
                            }
                        }
                    }
                }
            }
        },
        "actions": {
            "label":"Actions",
            "type":"array",
            "items": {
                "type":"object",
                "properties": {
                    "action": {
                        "type":"string",
                        "label":"Action"
                    },
                    "situation": {
                        "label":"Situation",
                        "type":"string",
                        "enum":[null,"on going","needed"]
                    },
                    "details": {
                        "label":"Details",
                        "type": "string",
                        "format":"multiline"
                    },
                    "references": {
                        "type": "array",
                        "label": "References",
                        "items": {
                            "type": "object",
                            "properties": {
                                "citation": {
                                    "type":"string",
                                    "label": "Citation"
                                },
                                "ref":  {
                                    "type": "string",
                                    "label": "Ref"
                                }
                            }
                        }
                    }
                }
            }
        },
        "uses": {
            "label":"Uses",
            "type":"array",
            "items": {
                "type":"object",
                "properties": {
                    "use": {
                        "type":"string",
                        "label":"Use"
                    },
                    "resource": {
                        "type":"string",
                        "label":"Resource used",
                        "enum":[null,"leaf","flower","fruit","stalk","root","seed","sap","whole plant"]
                    },
                    "provenance": {
                        "type":"string",
                        "label":"Provenance",
                        "enum":[null,"natural","cultivated"]
                    },
                    "details": {
                        "label":"Details",
                        "type": "string",
                        "format":"multiline"
                    },
                    "references": {
                        "type": "array",
                        "label": "References",
                        "items": {
                            "type": "object",
                            "properties": {
                                "citation": {
                                    "type":"string",
                                    "label": "Citation"
                                },
                                "ref":  {
                                    "type": "string",
                                    "label": "Ref"
                                }
                            }
                        }
                    }
                }
            }
        },
        "validations": {
            "label":"Validation",
            "type":"array",
            "items": {
                "type":"object",
                "properties": {
                    "metadata": {"type":"object"},
                    "field": {"type":"string"},
                    "comment": {"type":"string"}
                }
            }
        }
    },
    "required": ["metadata","taxon"]
};
