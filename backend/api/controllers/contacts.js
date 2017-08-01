'use strict';
var Contact = require('../../models/contact');
var Phone = require('../../models/phone');

module.exports = {
  listContacts: listContacts,
  getContact: getContact,
  listContactPhones: listContactPhones,
  getContactPhone: getContactPhone
};

function listContacts(req, res) {
  listDocuments(req, res, Contact)
}

function getContact(req, res){
  getDocument(req, res, Contact, 'contact_id');
}

function addContact(req, res){
  res.status(501).send("Not implemented")
}

function updateContact(req, res){
  res.status(501).send("Not implemented")
}

function deleteContact(req, res){
  res.status(501).send("Not implemented")
}

function listContactPhones(req, res){
  var contactId = req.swagger.params.contact_id.value;
  Phone.find({contact_id: contactId}, {_id: 0}).then(function(phones){
    res.json(phones);
  });
}

function addContactPhone(req, res){
  res.status(501).send("Not implemented")
}

function getContactPhone(req, res){
  var contactId = req.swagger.params.contact_id.value;
  var phoneId = req.swagger.params.phone_id.value;
  Phone.findOne({id: phoneId, contact_id: contactId}).then(function(contact){
    res.json(new Array(contact));
  });
}

function updateContactPhone(req, res){
  res.status(501).send("Not implemented")
}

function deleteContactPhone(req, res){
  res.status(501).send("Not implemented")
}
