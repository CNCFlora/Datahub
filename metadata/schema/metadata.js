exports.metadataSchema = {
    "type": "object",
    "properties": {
        "bibliographicCitation": {"type":"string"},
        "contributor": {"type":"string"},
        "created": {"type":"integer"},
        "creator":{"type":"string"},
        "description": {"type":"string"},
        "identifier": {"type":"string"},
        "type": {"type":"string"},
        "modified": {"type":"integer"},
        "language": {"type":"string"},
        "source": {"type":"string"},
        "subject": {"type":"string"},
        "title": {"type":"string"},
        "valid": {"type":"boolean"},
        "status": {"type":"string",enum:["open","validation","review","done"]}
    },
    "required": ["contributor","created","identifier","type","valid"]
};
