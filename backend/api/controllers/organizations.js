'use strict';
var Organization = require('../../models/organization');
var listDocuments = require('../helpers/search').listDocuments;
var getDocument = require('../helpers/search').getDocument;

module.exports = {
  listOrganizations: listOrganizations,
  getOrganization: getOrganization,
};

function listOrganizations(req, res) {
  listDocuments(req, res, Organization)
}

function getOrganization(req, res){
  getDocument(req, res, Organization, 'organization_id');
}
