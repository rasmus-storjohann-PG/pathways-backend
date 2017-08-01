var AirsTaxonomy = require('../../models/airs_taxonomy');
var Service = require('../../models/service');
var ServiceArea = require('../../models/service_area');
var ServiceTaxonomy = require('../../models/service_taxonomy');

module.exports = {
  getServicesMatchingKeywords: getServicesMatchingKeywords,
  listDocuments: listDocuments,
  getDocument: getDocument
}

function listDocuments(req, res, model){
  var page = req.swagger.params.page.value;
  var per_page = req.swagger.params.per_page.value;
  var skip = per_page * (page - 1)

  model.find({}, {_id: 0, __v: 0}).skip(skip).limit(per_page) // pagination
  .then(
    function(results){
      res.json(results);
    }
  );
}

function getDocument(req, res, model, primaryKey){
  var primaryVal = req.swagger.params[primaryKey].value;
  model.findOne({id: primaryVal}, {_id: 0, __v: 0}).then(function(doc){
    res.json(new Array(doc));
  });
}

function getServicesMatchingKeywords(keywords, limit){
  //TODO: Figure out how to prioritize the taxonomies based on the search relevance

  //Find all relavent taxonomy terms and return them as an array
  var services = AirsTaxonomy.find(
      {
          $text: {$search: keywords}
      },
      {
          Code: 1,
          score: {$meta: "textScore"}
      }
  ).sort( { score: { $meta: "textScore" } }).lean().exec(function (err, results) {
    return JSON.stringify(results);
  }).then(function(relaventAirsTaxonomies){
    return Array.from(new Set(relaventAirsTaxonomies.map(function(elem) { return elem.Code })))
  }).then(function(airsCodes){
    return ServiceTaxonomy.find(
        {
            taxonomy_id: {$in: airsCodes}
        }
    ).exec()
  }).then(function(results){
    var serviceTaxonomies = results.map(function(elem){return elem.service_id})
    return Service.find(
        {
            id: {$in: serviceTaxonomies},
            $text: {$search: keywords}
        },
        {
            score: {$meta: "textScore"}
        }
    ).sort( { score: { $meta: "textScore" } }).limit(limit).exec()
  })

  return services
}
