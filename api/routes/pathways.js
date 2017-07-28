var express = require('express');
var router = express.Router();
var getServicesMatchingKeywords = require('../services/search.js').getServicesMatchingKeywords

// TODO: Probably should move this elsewhere.
router.get('/service_areas', function(req, res){
  ServiceArea.find({}).exec().then(function(results){
    res.send(Array.from(new Set(results.map(function(e){return e.service_area}))));
  })
});

router.post('/', function(req, res) {
  // TODO: maybe this should be required?
  var keywords = req.body.keywords;
  var limit = parseInt(req.body.limit);
  getServicesMatchingKeywords(keywords, limit).then(function(services){
    res.send(services);
  })
});

module.exports = router;
