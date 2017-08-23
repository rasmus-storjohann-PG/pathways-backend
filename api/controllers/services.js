'use strict';
var util = require('util');

var Service = require('../../models/service');
var Bc211Taxonomy = require('../../models/bc211_taxonomy');
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
var FilteringHelper = require('../helpers/filtering')

function queryWhoWhatWhyKeywords(who, what, why, keywords, skip, per_page){
  /**
   * Creates a query on the WHO, WHAT, WHEN taxonomy system that BC211 uses.
   * This query appends the who what why terms into a regular expression 
   * that will do a logical OR on all the terms provided for a given category.
   * 
   * For example, if the query is: services?who=refugees&who=youth, 
   * this will return all services applicable to refugees or youth.
   */

  var query = [
    {
      $project: {
        _id: 0, __v: 0
      }
    }
  ]

  var taxonomies = {};
  var taxPattern = '(?i)(%s)';
  var performWhoWhatWhy = false;
  if (who){
    taxonomies['who'] = {};
    taxonomies['who']['$regex'] = util.format(taxPattern, who.join('|'));
    performWhoWhatWhy = true;
  }       
      
  if (what){
    taxonomies['what'] = {};
    taxonomies['what']['$regex'] = util.format(taxPattern, what.join('|'));
    performWhoWhatWhy = true;
  }
      
  if (why){
    taxonomies['why'] = {};
    taxonomies['why']['$regex'] = util.format(taxPattern, why.join('|'));
    performWhoWhatWhy = true;
  }

  if (performWhoWhatWhy){
    var lookupQ = {
      $lookup: {
        from: Bc211Taxonomy.collection.collectionName,
        localField: 'id',
        foreignField: 'service_id', 
        as: 'bc211_taxonomies'
      }
    }
    var matchQ = {
      $match: {
        'bc211_taxonomies': {
            $elemMatch: taxonomies
        }
      }
    }
    query.unshift(lookupQ, matchQ);
  }

  if (keywords){
    var match = { $match: { $text: { $search: keywords } } }
    var sort = { $sort: { score: { $meta: "textScore" } } }
    query.unshift(match, sort);
  }

  if (skip && skip > 0){
    query.push({$skip: skip});
  }

  if (per_page && per_page >= 0){
    query.push({$limit: per_page});
  }

  return Service.aggregate(query)
}

module.exports = {
  listServices: function (req, res) {
    var query = FilteringHelper.parseQueryParameters(req.swagger.params.query.value);
    var page = req.swagger.params.page.value;
    var per_page = req.swagger.params.per_page.value;
    var skip = per_page * (page - 1)
    
    var who = req.swagger.params.who.value;
    var what = req.swagger.params.what.value;
    var why = req.swagger.params.why.value;  
    var keywords = req.swagger.params.keywords.value;  

    queryWhoWhatWhyKeywords(who, what, why, keywords, skip, per_page).then(function(docs){
      res.json(docs);
    });
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
