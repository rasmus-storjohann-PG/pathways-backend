'use strict';
var Location = require('../../models/location');
var SearchHelper = require('../helpers/search');

module.exports = {
  listLocations: function (req, res) {
    SearchHelper.listDocuments(req, res, Location)
  },
  getLocation: function (req, res){
    SearchHelper.getDocument(req, res, Location, 'location_id');
  }
};
