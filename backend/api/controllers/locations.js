'use strict';
var Location = require('../../models/location');
var listDocuments = require('../../services/search').listDocuments;
var getDocument = require('../../services/search').getDocument;

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
