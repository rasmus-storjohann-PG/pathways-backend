'use strict';
var Location = require('../../models/location');
var listDocuments = require('../helpers/search').listDocuments;
var getDocument = require('../helpers/search').getDocument;

module.exports = {
  listLocations: listLocations,
  getLocation: getLocation,
};

function listLocations(req, res) {
  listDocuments(req, res, Location)
}

function getLocation(req, res){
  getDocument(req, res, Location, 'location_id');
}
