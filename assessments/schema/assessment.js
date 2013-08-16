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
                "lsid":{"type":"string","label":"LSID"},
                "fb":{"type":"string","label":"Flora ID"},
                "ipni":{"type":"string","label":"IPNI ID"}
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
		"dateOfAssessment": {
			"type":"number",
            "label":"Date of assessment",
			"description": "Timestamp of the assessment"
		},
		"generationLength": {
			"type":"string",
            "label":"Generation Length",
            "description":""
		},
        "changes": {
            "type":"object",
            "label":"Changes",
            "description":"Changes from last evaluation",
            "properties": {
                "reasonsForChange": {
                    "type":"string",
                    "label":"Reasons for change",
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
                    "type":"boolan"
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
		},
		"notes": {
			"type":"string",
            "label":"Notes",
            "description":"Extra notes on this assessment."
		}
	}
};

