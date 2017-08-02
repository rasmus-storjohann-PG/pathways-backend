'use strict';
var Organization = require('../../models/organization');
var Contact = require('../../models/contact');
var Funding = require('../../models/funding');
var Location = require('../../models/location');
var Phone = require('../../models/phone');
var Program = require('../../models/program');
var Service = require('../../models/service');
var SearchHelper = require('../helpers/search');

module.exports = {
  listOrganizations: function (req, res) {
    SearchHelper.listDocuments(req, res, Organization)
  },
  getOrganization: function (req, res){
    SearchHelper.getDocument(req, res, Organization, 'organization_id');
  },
  listOrganizationContacts: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, Contact, 'organization_id');
  },
  getOrganizationContact: function (req, res){
    SearchHelper.getRelatedDocument(req, res, Contact, 'contact_id', 'organization_id');
  },
  listOrganizationFundings: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, Funding, 'organization_id');
  },
  getOrganizationFunding: function (req, res){
    SearchHelper.getRelatedDocument(req, res, Funding, 'funding_id', 'organization_id');
  },
  listOrganizationLocations: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, Location, 'organization_id');
  },
  getOrganizationLocation: function (req, res){
    SearchHelper.getRelatedDocument(req, res, Location, 'location_id', 'organization_id');
  },
  listOrganizationPhones: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, Phone, 'organization_id');
  },
  getOrganizationPhone: function (req, res){
    SearchHelper.getRelatedDocument(req, res, Phone, 'phone_id', 'organization_id');
  },
  listOrganizationPrograms: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, Program, 'organization_id');
  },
  getOrganizationProgram: function (req, res){
    SearchHelper.getRelatedDocument(req, res, Program, 'program_id', 'organization_id');
  },
  listProgramServices: function (req, res){
    var organizationId = req.swagger.params.organization_id.value;
    var programId = req.swagger.params.program_id.value;

    Service.find({organization_id: organizationId, program_id: programId}, {_id: 0, __v: 0}).then(function(docs){
      res.json(docs);
    });
  },
  getProgramService: function (req, res){
    var organizationId = req.swagger.params.organization_id.value;
    var programId = req.swagger.params.program_id.value;
    var serviceId = req.swagger.params.service_id.value;

    Service.findOne(
      {organization_id: organizationId, program_id: programId, service_id: serviceId},
      {_id: 0, __v: 0}).then(function(doc){
      res.json(new Array(doc));
    });
  },
  listOrganizationServices: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, Service, 'organization_id');
  },
  getOrganizationService: function (req, res){
    SearchHelper.getRelatedDocument(req, res, Service, 'service_id', 'organization_id');
  }
};
