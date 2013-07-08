exports.assessmentSchema = {
	"type":"object",
	"properties":{
        "metadata": {
            "type":"object",
            "required":true
        },
        "taxon": {
            "type": "object",
            "properties": {
                "family":{"type":"string"},
                "scientificName":{"type":"string"},
                "lsid":{"type":"string"},
                "fb":{"type":"string"},
                "ipni":{"type":"string"}
            }
        },
		"assessor": {
			"type":"string",
			"description": "The name of the Assessor",
			"id": "assessor",
			"required":false
		},
		"evaluator": {
			"type":"string",
			"description": "the revisor of this assessment",
			"id": "evaluator",
			"required":false
		},
		"category": {
			"type":"string",
			"title": "Assessment",
			"name": "Assessment",
			"description": "The category of theaten.",
			"id": "assessment",
			"required":true
		},
		"criteria": {
			"type":"string",
			"description": "Criteria used to assess this specie.",
			"id": "criteria",
			"required":true
		},
		"rationale": {
			"type":"string",
			"required":true
		},
		"currentPopulationTrend": {
			"type":"string",
			"id": "currentPopulationTrend",
			"required":false
		},
		"dateLastSeen": {
			"type":"number",
			"id": "dateLastSeen",
			"required":false
		},
		"dateOfAssessment": {
			"type":"number",
			"description": "timestamp of the assessment",
			"id": "dateOfAssessment",
			"required":true
		},
		"generationLength": {
			"type":"string",
			"required":false
		},
		"genuineChangeRecent": {
			"type":"string",
			"required":false
		},
		"genuineChangeSinceFirstTime": {
			"type":"string",
			"required":false
		},
		"noChangeSameCategoryAndCriteria": {
			"type":"string",
			"required":false
		},
		"noChangeSameCategoryAndDifferentCriteria": {
			"type":"string",
			"required":false
		},
		"nonGenuineChangeCriteriaRevisor": {
			"type":"string",
			"required":false
		},
		"nonGenuineChangeIncorrectDataUsedPreviously": {
			"type":"string",
			"required":false
		},
		"nonGenuineChangeKnowledgeOfCrite": {
			"type":"string",
			"required":false
		},
		"nonGenuineChangeNewInformation": {
			"type":"string",
			"required":false
		},
		"nonGenuineChangeOther": {
			"type":"string",
			"required":false
		},
		"nonGenuineChangeTaxonomy": {
			"type":"string",
			"required":false
		},
		"notes": {
			"type":"string",
			"required":false
		},
		"numberOfLocations": {
			"type":"integer",
			"required":false
		},
		"numberOfMatureIndividuals": {
			"type":"string",
			"required":false
		},
		"populationDeclineFuture": {
			"type":"string",
			"required":false
		},
		"populationDeclinePast": {
			"type":"string",
			"required":false
		},
		"possiblyExtinctCandidate": {
			"type":"string",
			"required":false
		},
		"possiblyExtinct": {
			"type":"string",
			"required":false
		},
		"reasonsForChange": {
			"type":"string",
			"id": "ReasonsForChange",
			"required":false
		},
		"severelyFragmented": {
			"type":"string",
			"required":false
		},
		"snapshot": {
			"type":"string",
			"description": "The snapshot of the specie data used",
			"id": "snapshot",
			"required":true
		},
		"status": {
			"type":"string",
			"description": "status of work",
			"required":true
		},
		"timePeriodOfFutureDecline": {
			"type":"string",
			"required":false
		},
		"timePeriodOfPastDecline": {
			"type":"string",
			"required":false
		}
	}
};

