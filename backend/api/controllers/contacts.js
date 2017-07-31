'use strict';
var Contact = require('../../models/contact');

module.exports = {
  listContacts: listContacts,
  getContact: getContact
};

function listContacts(req, res) {
  var query = req.swagger.params.query.value;
  console.log(query);
  var page = req.swagger.params.page.value;
  var per_page = req.swagger.params.per_page.value;
  var skip = per_page * (page - 1)

  Contact.find({}, {_id: 0}).skip(skip).limit(per_page) // pagination
  .then(
    function(results){
      res.json(results);
    }
  );
}

function addContact(req, res){
    res.json(["hello", "world"]);
}

function getContact(req, res){
  var contactId = req.swagger.params.contact_id.value;
  Contact.findOne({id: contactId}, {_id: 0}).then(function(contact){
    res.json(new Array(contact));
  });
}

function listContactPhones(req, res){
    res.json(["hello", "world"]);
}

function getContactPhone(req, res){
    res.json(["hello", "world"]);
}
