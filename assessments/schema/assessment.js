exports.assessmentSchema = {
	"type":"object",
	"properties":{
        "metadata": {
            "type":"object"
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
			"description": "timestamp of the assessment"
		},
		"generationLength": {
			"type":"string"
		},
		"genuineChangeRecent": {
			"type":"string"
		},
		"genuineChangeSinceFirstTime": {
			"type":"string"
		},
		"noChangeSameCategoryAndCriteria": {
			"type":"string"
		},
		"noChangeSameCategoryAndDifferentCriteria": {
			"type":"string"
		},
		"nonGenuineChangeCriteriaRevisor": {
			"type":"string"
		},
		"nonGenuineChangeIncorrectDataUsedPreviously": {
			"type":"string"
		},
		"nonGenuineChangeKnowledgeOfCrite": {
			"type":"string"
		},
		"nonGenuineChangeNewInformation": {
			"type":"string"
		},
		"nonGenuineChangeOther": {
			"type":"string"
		},
		"nonGenuineChangeTaxonomy": {
			"type":"string"
		},
		"notes": {
			"type":"string"
		},
		"numberOfLocations": {
			"type":"integer"
		},
		"numberOfMatureIndividuals": {
			"type":"string"
		},
		"populationDeclineFuture": {
			"type":"string"
		},
		"populationDeclinePast": {
			"type":"string"
		},
		"possiblyExtinctCandidate": {
			"type":"string"
		},
		"possiblyExtinct": {
			"type":"string"
		},
		"reasonsForChange": {
			"type":"string"
		},
		"severelyFragmented": {
			"type":"string"
		},
		"snapshot": {
			"type":"string"
		},
		"status": {
			"type":"string",
			"description": "Status of work"
            "label": "status",
            "enum":["Open","Review","Comments","Done"]
		},
		"timePeriodOfFutureDecline": {
			"type":"string"
		},
		"timePeriodOfPastDecline": {
			"type":"string"
		}
	}
};

