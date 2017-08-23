var AirsTaxonomy = require('../../models/airs_taxonomy');
var Service = require('../../models/service');
var ServiceArea = require('../../models/service_area');
var ServiceTaxonomy = require('../../models/service_taxonomy');
var FilteringHelper = require('./filtering')

module.exports = {
  listDocuments: listDocuments,
  getDocument: getDocument,
  getRelatedDocument: getRelatedDocument,
  listRelatedDocuments: listRelatedDocuments
}

function listDocuments(req, res, model){
  var query = FilteringHelper.parseQueryParameters(req.swagger.params.query.value);
  var page = req.swagger.params.page.value;
  var per_page = req.swagger.params.per_page.value;
  var skip = per_page * (page - 1)

  model.find(query, {_id: 0, __v: 0}).skip(skip).limit(per_page) // pagination
  .then(function(docs){
      res.json(docs);
  });
}

function getDocument(req, res, model, primaryKey){
  var primaryVal = req.swagger.params[primaryKey].value;
  model.findOne({id: primaryVal}, {_id: 0, __v: 0}).then(function(doc){
    if (!doc){
      res.json(new Array())
    } else {
      res.json(new Array(doc));
    }
  });
}

function getRelatedDocument(req, res, foreignModel, foreignKey, primaryKey){
  var primaryVal = req.swagger.params[primaryKey].value;
  var foreignVal = req.swagger.params[foreignKey].value;
  var query = {};
  query['id'] = foreignVal;
  query[primaryKey] = primaryVal;
  foreignModel.findOne(query, {_id: 0, __v: 0}).then(function(doc){
    if (!doc){
      res.json(new Array())
    } else {
      res.json(new Array(doc));
    }
  });
}

function listRelatedDocuments(req, res, foreignModel, primaryKey){
  var primaryVal = req.swagger.params[primaryKey].value;
  var query = {};
  query[primaryKey] = primaryVal;
  foreignModel.find(query, {_id: 0, __v: 0}).then(function(docs){
    res.json(docs);
  });
}