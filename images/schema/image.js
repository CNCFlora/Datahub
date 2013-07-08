exports.imageSchema = {
    type: "object",
    properties: {
        "folder": { type: "string" },
        "tags": { type:"array", items:{type:"string"}},
        "can_publish": { type: "boolean"},
        "metadata": {
            type: "object",
            properties: {
                contributor: {type:"string"},
                creator:{type:"string"},
                created: {type:"integer"},
                description: {type:"string"},
                identifier: {type:"string"},
                type: {type:"string"},
                source: {type:"string"},
                title: {type: "string"},
                valid: {type: "boolean"}
            },
            required: ["contributor","created","identifier","type","source","valid"]
        }
    },
    required: ["folder"]
};
