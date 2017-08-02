'use strict';
var Service = require('../../models/service');
var Contact = require('../../models/contact');
var Eligibility = require('../../models/eligibility');
// var Fee = require('../../models/fee');
var Funding = require('../../models/funding');
var HolidaySchedule = require('../../models/holiday_schedule');
var Language = require('../../models/language');
var PaymentAccepted = require('../../models/payment_accepted');
var Phone = require('../../models/phone');
var RegularSchedule = require('../../models/regular_schedule');
var RequiredDocument = require('../../models/required_document');
var ServiceArea = require('../../models/service_area');

var SearchHelper = require('../helpers/search');

module.exports = {
  listServices: function (req, res) {
    SearchHelper.listDocuments(req, res, Service);
  },
  getService: function (req, res){
    SearchHelper.getDocument(req, res, Service, 'service_id');
  },
  listServiceContacts: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, Contact, 'service_id');
  },
  getServiceContact: function (req, res){
    SearchHelper.getRelatedDocument(req, res, Contact, 'contact_id', 'service_id');
  },
  listServiceEligibilities: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, Eligibility, 'service_id');
  },
  getServiceEligibility: function (req, res){
    SearchHelper.getRelatedDocument(req, res, Eligibility, 'eligibility_id', 'service_id');
  },

  // function listServiceFees(req, res){
  //   SearchHelper.listRelatedDocuments(req, res, Fee, 'service_id');
  // }
  //
  // function getServiceFee(req, res){
  //   SearchHelper.getRelatedDocument(req, res, Fee, 'fee_id', 'service_id');
  // }

  listServiceFundings: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, Funding, 'service_id');
  },
  getServiceFunding: function (req, res){
    SearchHelper.getRelatedDocument(req, res, Funding, 'funding_id', 'service_id');
  },
  listServiceHolidaySchedules: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, HolidaySchedule, 'service_id');
  },
  getServiceHolidaySchedule: function (req, res){
    SearchHelper.getRelatedDocument(req, res, HolidaySchedule, 'holiday_schedule_id', 'service_id');
  },
  listServiceLanguages: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, Language, 'service_id');
  },
  getServiceLanguage: function (req, res){
    SearchHelper.getRelatedDocument(req, res, Language, 'language_id', 'service_id');
  },
  listServicePaymentsAccepted: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, PaymentAccepted, 'service_id');
  },
  getServicePaymentAccepted: function (req, res){
    SearchHelper.getRelatedDocument(req, res, PaymentAccepted, 'payment_accepted_id', 'service_id');
  },
  listServicePhones: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, Phone, 'service_id');
  },
  getServicePhone: function (req, res){
    SearchHelper.getRelatedDocument(req, res, Phone, 'phone_id', 'service_id');
  },
  listServiceRegularSchedule: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, RegularSchedule, 'service_id');
  },
  getServiceRegularSchedule: function (req, res){
    SearchHelper.getRelatedDocument(req, res, RegularSchedule, 'regular_schedule_id', 'service_id');
  },
  listServiceRequiredDocument: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, RequiredDocument, 'service_id');
  },
  getServiceRequiredDocument: function (req, res){
    SearchHelper.getRelatedDocument(req, res, RequiredDocument, 'required_document_id', 'service_id');
  },
  listServiceServiceAreas: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, ServiceArea, 'service_id');
  },
  getServiceServiceArea: function (req, res){
    SearchHelper.getRelatedDocument(req, res, ServiceArea, 'service_area_id', 'service_id');
  },
};
