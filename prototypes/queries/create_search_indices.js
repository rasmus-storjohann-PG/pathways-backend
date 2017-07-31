db.getCollection('airs_taxonomies').dropIndexes()
db.getCollection('airs_taxonomies').createIndex(
    {
        "Code+B1": "text",
        Definition: "text",
        Keywords: "text"
    },
    {
        weights: {
            "Code+B1": 5,
            Keywords: 10,
            Definition: 8
        },
        name: "TextIndex"
    }
)

db.getCollection('service').dropIndexes()
db.getCollection('service').createIndex(
    {
        name: "text",
        description: "text",
        alternate_name: "text"
    },
    {
        weights: {
            name: 8,
            description: 10,
            alternate_name: 3
        },
        name: "TextIndex"
    }
)
//     
db.getCollection('service_area').dropIndexes()
db.getCollection('service_taxonomy').dropIndexes()
db.getCollection('service_area').createIndex({service_id: 2})
db.getCollection('service_taxonomy').createIndex({service_id: 2})
