'use strict';
var Service = require('../../models/service');
var listDocuments = require('../../services/search').listDocuments;
var getDocument = require('../../services/search').getDocument;

module.exports = {
  listServices: listServices,
  getService: getService
};

function listServices(req, res) {
  listDocuments(req, res, Service)
}

function getService(req, res){
  getDocument(req, res, Service, 'service_id');
}
