'use strict';
var Location = require('../../models/location');
var HolidaySchedule = require('../../models/holiday_schedule');
var Language = require('../../models/language');
var PostalAddress = require('../../models/postal_address');
var PhysicalAddress = require('../../models/physical_address');
var Phone = require('../../models/phone');
var RegularSchedule = require('../../models/regular_schedule');
var Service = require('../../models/service');
var AccessibilityForDisabilities = require('../../models/accessibility_for_disabilities');
var SearchHelper = require('../helpers/search');

module.exports = {
  listLocations: function (req, res) {
    SearchHelper.listDocuments(req, res, Location)
  },
  getLocation: function (req, res){
    SearchHelper.getDocument(req, res, Location, 'location_id');
  },
  listLocationHolidaySchedules: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, HolidaySchedule, 'location_id');
  },
  getLocationHolidaySchedule: function (req, res){
    SearchHelper.getRelatedDocument(req, res, HolidaySchedule, 'holiday_schedule_id', 'location_id');
  },
  listLocationLanguages: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, Language, 'location_id');
  },
  getLocationLanguages: function (req, res){
    SearchHelper.getRelatedDocument(req, res, Language, 'language_id', 'location_id');
  },
  listLocationPostalAddresses: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, PostalAddress, 'location_id');
  },
  getLocationPostalAddress: function (req, res){
    SearchHelper.getRelatedDocument(req, res, PostalAddress, 'postal_address_id', 'location_id');
  },
  listLocationPhysicalAddresses: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, PhysicalAddress, 'location_id');
  },
  getLocationPhysicalAddress: function (req, res){
    SearchHelper.getRelatedDocument(req, res, PhysicalAddress, 'physical_address_id', 'location_id');
  },
  listLocationPhones: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, Phone, 'location_id');
  },
  getLocationPhone: function (req, res){
    SearchHelper.getRelatedDocument(req, res, Phone, 'phone_id', 'location_id');
  },
  listLocationRegularSchedules: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, RegularSchedule, 'location_id');
  },
  getLocationRegularSchedule: function (req, res){
    SearchHelper.getRelatedDocument(req, res, RegularSchedule, 'regular_schedule_id', 'location_id');
  },
  listLocationServices: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, Service, 'location_id');
  },
  getLocationService: function (req, res){
    SearchHelper.getRelatedDocument(req, res, Service, 'service_id', 'location_id');
  },
  listLocationAccessibilityForDisabilities: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, AccessibilityForDisabilities, 'location_id');
  },
  getLocationAccessibilityForDisabilities: function (req, res){
    SearchHelper.getRelatedDocument(req, res, AccessibilityForDisabilities, 'accessibility_id', 'location_id');
  }
};
