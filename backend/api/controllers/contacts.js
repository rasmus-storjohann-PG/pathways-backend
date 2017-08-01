'use strict';
var Contact = require('../../models/contact');
var Phone = require('../../models/phone');
var parseQueryParameters = require('../../services/filtering').parseQueryParameters;

module.exports = {
  listContacts: listContacts,
  getContact: getContact,
  listContactPhones: listContactPhones
};

function listContacts(req, res) {
  var query = parseQueryParameters(req.swagger.params.query.value);
  var page = req.swagger.params.page.value;
  var per_page = req.swagger.params.per_page.value;
  var skip = per_page * (page - 1)

  Contact.find(query, {_id: 0}).skip(skip).limit(per_page) // pagination
  .then(function(results){
      res.json(results);
    }
  );
}

function addContact(req, res){
  res.status(501).send("Not implemented")
}

function getContact(req, res){
  var contactId = req.swagger.params.contact_id.value;
  Contact.findOne({id: contactId}, {_id: 0}).then(function(contact){
    res.json(new Array(contact));
  });
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
    console.log(phones);
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
