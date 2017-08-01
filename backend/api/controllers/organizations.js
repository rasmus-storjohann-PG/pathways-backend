'use strict';
var Organization = require('../../models/organization');
var SearchHelper = require('../helpers/search');

module.exports = {
  listOrganizations: function (req, res) {
    SearchHelper.listDocuments(req, res, Organization)
  },
  getOrganization: function (req, res){
    SearchHelper.getDocument(req, res, Organization, 'organization_id');
  }
};
