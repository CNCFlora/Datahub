exports.biblioSchema = {
    "type":"object",
    "properties": {
        "metadata": {"type":"object"},
        "abstract": {"type":"string","format":"multiline","label":"Abstract"},
        "fullCitation": {"type":"string","label":"Full citation"},
        "shortCitation": {"type":"string","label":"Short citation"},
        "author": {
            "type": "array",
            "label": "Author",
            "items": {
                "type": "object",
                "properties": {
                    "name": {"type":"string"}
                }
            }
        },
        "contact": {
            "type": "array",
            "label": "Contact",
            "items": {
                "type": "object",
                "properties": {
                    "name": {"type":"string"},
                    "email": {"type":"string"}
                }
            }
        },
        "title": {"type":"string","label":"Title"},
        "type": {
            "type": "string",
            "label": "Type",
            "enum": [
                "article",
                "book",
                "book chapter",
                "thesis",
                "congress summary",
                "webpage",
                "legislation",
                "other"
            ] 
        },
        "year": {"type":"number","label":"Year"},
        "sequence": {"type":"string","label":"Sequence"},
        "journal": {
            "type":"object",
            "label": "Journal",
            "properties": {
                "name": {"type": "string"},
                "volume": {"type": "string"},
                "number": {"type": "string"},
                "pages": {"type": "string"}
            }
        },
        "book": {
            "type": "object",
            "label": "Book",
            "properties": {
                "title": {"type":"string"},
                "editor": {"type":"string"},
                "publisher": {"type":"string"},
                "volume": {"type":"string"},
                "city":{"type":"string"},
                "edition": {"type":"string"},
                "pages": {"type":"string"}
            }
        },
        "thesis": {
            "type": "object",
            "label":"Thesis",
            "properties": {
                "type": {"type":"string"},
                "university": {"type":"string"},
                "department": {"type":"string"},
                "city": {"type":"string"}
            }
        },
        "identifier": {
            "type": "array",
            "label":"Identifier",
            "items": {
                "type": "object",
                "properties": {
                    "name": {"type":"string", "enum": ["doi"]},
                    "id": {"type":"string"}
                }
            }
        },
        "link": {
            "type": "array",
            "label":"Link",
            "items": {
                "type": "object",
                "properties": {
                    "url": {"type": "string"},
                    "anchor": {"type": "string"}
                }
            }
        },
        "more": {"type":"string","format":"multiline","label":"More"},
        "details": {"type":"string","format":"multiline","label":"Details"}
    }
};
