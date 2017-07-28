var express = require('express');
var AirsTaxonomy = require('../models/airs_taxonomy');
var Service = require('../models/service');
var ServiceArea = require('../models/service_area');
var ServiceTaxonomy = require('../models/service_taxonomy');
var router = express.Router();

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
    var serviceTaxonomies = results.map(function(elem){return parseInt(elem.service_id)})
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


router.get('/service_areas', function(req, res){
  ServiceArea.find({}).exec().then(function(results){
    res.send(Array.from(new Set(results.map(function(e){return e.service_area}))));
  })
});

/* GET users listing. */
router.get('/', function(req, res) {
  // TODO: maybe this should be required?
  res.render('pathways', { title: 'Pathways', })
});

/* GET users listing. */
router.post('/', function(req, res) {
  // TODO: maybe this should be required?
  var keywords = req.body.keywords;
  var limit = parseInt(req.body.limit);
  getServicesMatchingKeywords(keywords, limit).then(function(services){
    res.send(services);
  })
});

module.exports = router;
