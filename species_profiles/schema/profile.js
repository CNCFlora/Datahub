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
                "lsid":{"type":"string"},
                "fb":{"type":"string"},
                "ipni":{"type":"string"}
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
                    "type":"boolean",
                    "label": "Specie have potential economic value"
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
                        "type": {"type":"string", "enum":["absolute","range","less then","greater then","circa"]},
                        "minimum": {"type":"number"},
                        "maximum": {"type":"number"},
                        "absolute": {"type":"number"}
                    }
                },
                "numberOfSubpopulations": {
                    "type": "object",
                    "label":"Number of subpopulations",
                    "properties": {
                        "type": {"type":"string", "enum":["absolute","range","less then","greater then","circa"]},
                        "minimum": {"type":"number"},
                        "maximum": {"type":"number"},
                        "absolute": {"type":"number"}
                    }
                },
                "numberOfIndividualsInBiggestSubpopulation": {
                    "type": "object",
                    "label":"Number of individuals in biggest subpopulation",
                    "properties": {
                        "type": {"type":"string", "enum":["absolute","range","less then","greater then","circa"]},
                        "minimum": {"type":"number"},
                        "maximum": {"type":"number"},
                        "absolute": {"type":"number"}
                    }
                },
                "populationalReduction": {
                    "type": "object",
                    "label":"Populational reduction",
                    "properties": {
                        "type": {"type":"string", "enum":["absolute","range","less then","greater then","circa"]},
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
                            "enum":["unkown","no","yes"]
                        }
                    }
                },
                "generationTiming": {
                    "type": "object",
                    "label":"Generation timing (in months)",
                    "properties": {
                        "type": {"type":"string", "enum":["absolute","range","less then","greater then","circa"]},
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
                    "enum": ["unkown","yes","no"]
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
                        "minimum": {"type":"number"},
                        "maximum": {"type":"number"}
                    }
                },
                "endemism":{ 
                    "label":"Endemism",
                    "type":"array",
                    "items": {
                        "type": "string" 
                    }
                },
                "resume": { 
                    "label": "Distribution resume",
                    "format": "multiline",
                    "type": "string" 
                }
            }
        },
        "ecology": {
            "type":"object",
            "label":"Ecology",
            "properties": {
                "lifeForm": {
                    "label":"Life form",
                    "type":"string",
                    "enum":["herbacea","arbustiva","arborea","liana","parasita","hemiparasita"]
                },
                "longevity": {
                    "label":"Longivity",
                    "type":"string",
                    "enum":["unkown","anual","bianual","perennial"]
                },
                "fenology": {
                    "label":"Fenology",
                    "type":"string",
                    "enum":["deciduifolia","semideciduifolia","perenifolia"]
                },
                "clonal": {
                    "label":"Clonal",
                    "type":"string",
                    "enum":["unkown","yes","no"]
                },
                "resprout": {
                    "label":"Resprout",
                    "type":"string",
                    "enum":["unkown","yes","no"]
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
                        "enum": ["local","regional","national"]
                    },
                    "severity": {
                        "label":"Severity",
                        "type":"string",
                        "enum": ["very low","low","medium","high","very high"]
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
                        "items":{"type":"string","enum":["past","present","future"]}
                    },
                    "decline": {
                        "label": "Decline",
                        "type": "array",
                        "items":{"type":"string","enum":["locality","habitat","occupancy","occurrence","mature individuals"]}
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
                        "enum":["on going","needed"]
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
                        "enum":["leaf","flower","fruit","stalk","root","seed","sap","whole plant"]
                    },
                    "provenance": {
                        "type":"string",
                        "label":"Provenance",
                        "enum": ["natural","cultivated"]
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
