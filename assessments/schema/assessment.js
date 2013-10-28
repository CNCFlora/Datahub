exports.assessmentSchema = {
	"type":"object",
	"properties":{
        "metadata": {
            "type":"object",
            "label":"Metadata",
            "description":""
        },
        "taxon": {
            "type": "object",
            "label": "Taxon",
            "properties": {
                "family":{"type":"string","label":"Family"},
                "scientificName":{"type":"string","label":"Scientific Name"},
                "scientificNameAuthorship":{"type":"string"},
                "lsid":{"type":"string","label":"LSID"}
            }
        },
        "profile": {
            "type":"string",
            "label":"Specie Profile",
            "description":""
        },
        "review":{
            "type":"object",
            "label":"Review",
            "properties": {
                "status": {
                    "type":"string",
                    "label":"Status",
                    "enum":[null,"","consistent","inconsistent","rationale"]
                },
                "comment": {
                    "type":"string",
                    "label":"Comment",
                    "format":"multiline"
                },
                "rationale": {
                    "type":"string",
                    "label":"Rationale",
                    "format":"multiline"
                }
            }
        },
        "comments": {
            "type":"array",
            "items": {
                "type": "object",
                "properties": {
                    "creator": {
                        "type":"string"
                    },
                    "contact": {
                        "type":"string"
                    },
                    "created": {
                        "type":"number"
                    },
                    "comment": {
                        "type":"string"
                    }
                }
            }
        },
		"assessor": {
			"type":"string",
            "label": "Assessor",
			"description": "The name of the Assessor of this Assesssment"
		},
		"evaluator": {
			"type":"string",
			"description": "The revisor of this Assessment",
            "label":"Evaluator"
		},
		"category": {
			"type":"string",
			"label": "Assessment",
			"description": "The category of theaten."
		},
		"criteria": {
			"type":"string",
			"description": "Criteria used to assess this specie.",
            "label":"Criteria"
		},
		"rationale": {
			"type":"string",
            "label": "Rationale",
            "description": "The justification for this assessment",
            "format":"multiline"
		},
		"dateOfAssessment": {
			"type":"number",
            "label":"Date of assessment",
			"description": "Timestamp of the assessment"
		},
        "changes": {
            "type":"object",
            "label":"Changes",
            "description":"Changes from last evaluation",
            "properties": {
                "reasonsForChange": {
                    "type":"string",
                    "label":"Reasons for change",
                    "format":"multiline",
                    "description":""
                },
                "genuineChangeRecent": {
                    "type":"boolean",
                    "label":"Genuine Change Recent"
                },
                "genuineChangeSinceFirstTime": {
                    "type":"boolean"
                },
                "noChangeSameCategoryAndCriteria": {
                    "type":"boolean"
                },
                "noChangeSameCategoryAndDifferentCriteria": {
                    "type":"boolean"
                },
                "nonGenuineChangeCriteriaRevisor": {
                    "type":"boolean"
                },
                "nonGenuineChangeIncorrectDataUsedPreviously": {
                    "type":"boolean"
                },
                "nonGenuineChangeKnowledgeOfCrite": {
                    "type":"boolean"
                },
                "nonGenuineChangeNewInformation": {
                    "type":"boolean"
                },
                "nonGenuineChangeOther": {
                    "type":"boolean"
                },
                "nonGenuineChangeTaxonomy": {
                    "type":"boolean"
                }
            }
        },
        "information": {
            "type":"object",
            "label":"More information",
            "properties":{
                "currentPopulationTrend": {
                    "type":"string",
                    "label":"Current population Trend",
                    "description":""
                },
                "dateLastSeen": {
                    "type":"number",
                    "label":"Date last seen",
                    "description":""
                },
                "generationLength": {
                    "type":"string",
                    "label":"Generation Length",
                    "description":""
                },
                "numberOfLocations": {
                    "type":"integer",
                    "label":"Number of locations"
                },
                "numberOfMatureIndividuals": {
                    "type":"string",
                    "label":"Number of Mature Individuals"
                },
                "populationDeclinePast": {
                    "type":"number",
                    "label":"Population decline (past)",
                    "description":"% of population decline in the past"
                },
                "timePeriodOfPastDecline": {
                    "type":"string"
                },
                "populationDeclineFuture": {
                    "type":"number",
                    "label":"Population decline (future)",
                    "description":"% of population decline in the future"
                },
                "timePeriodOfFutureDecline": {
                    "type":"string"
                },
                "possiblyExtinctCandidate": {
                    "type":"boolean",
                    "label":"Possibly extinct candidate",
                    "description":"if specie is candidate to possibly extinction"
                },
                "possiblyExtinct": {
                    "type":"boolean",
                    "label":"Possibly extinct",
                    "description":"if specie is possibly extinct"
                },
                "severelyFragmented": {
                    "type":"string",
                    "label":"Severely Fragmented",
                    "description":"If the specie distribution is fragmented",
                    "enum":[null,"yes","no","unkown"]
                }
            }
        },
		"notes": {
			"type":"string",
            "label":"Notes",
            "format":"multiline",
            "description":"Extra notes on this assessment."
		}
	}
};

