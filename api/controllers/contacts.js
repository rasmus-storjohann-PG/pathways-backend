'use strict';
var Contact = require('../../models/contact');
var Phone = require('../../models/phone');
var SearchHelper = require('../helpers/search');

module.exports = {
  listContacts: function (req, res) {
    SearchHelper.listDocuments(req, res, Contact)
  },
  getContact: function (req, res){
    SearchHelper.getDocument(req, res, Contact, 'contact_id');
  },
  listContactPhones: function (req, res){
    SearchHelper.listRelatedDocuments(req, res, Phone, 'contact_id');
  },
  getContactPhone: function (req, res){
    SearchHelper.getRelatedDocument(req, res, Phone, 'phone_id', 'contact_id');
  },
  addContact: function (req, res){
    res.status(501).send("Not implemented")
  },
  updateContact: function (req, res){
    res.status(501).send("Not implemented")
  },
  deleteContact: function (req, res){
    res.status(501).send("Not implemented")
  },
  addContactPhone: function (req, res){
    res.status(501).send("Not implemented")
  },
  updateContactPhone: function (req, res){
    res.status(501).send("Not implemented")
  },
  deleteContactPhone: function (req, res){
    res.status(501).send("Not implemented")
  }
};
