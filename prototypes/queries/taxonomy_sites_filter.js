//TODO: Figure out how to prioritize the taxonomies based on the search relevance
var filter_keywords = "immigrant language education english"

//Find all relavent taxonomy terms and return them as an array
var relaventAirsTaxonomies = db.getCollection('airs_taxonomies').find(
    {
        $text: {$search: filter_keywords}
    },
    {
        Code: 1,
        score: {$meta: "textScore"}
    }
).sort( { score: { $meta: "textScore" } })

var relaventAirsTaxonomies = relaventAirsTaxonomies.toArray()

var airsCodes =  Array.from(new Set(relaventAirsTaxonomies.map(function(elem) { return elem.Code })))
var serviceTaxonomies = db.getCollection('service_taxonomy').find(
    {
        taxonomy_id: {$in: airsCodes}
    }
)
    
var services = db.getCollection('service').find(
    {
        id: {$in: serviceTaxonomies.map(function(elem){return elem.service_id})},
        $text: {$search: filter_keywords}
    },
    {
        score: {$meta: "textScore"}
    }
).sort( { score: { $meta: "textScore" } })
