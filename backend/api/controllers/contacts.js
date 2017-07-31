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
  // console.log(req.swagger.params)
  var contactId = req.swagger.params.contact_id.value;
  console.log(typeof contactId);
  // console.log(typeof contactId);
  Contact.findOne({id: contactId}, {_id: 0}).then(function(contactR){
    res.json(new Array(contactR));

    // if (contact){
    //   res.json(result);
    // } else{
    //   res.status(404).send("Sorry can't find that!")
    // }
  });
}

function listContactPhones(req, res){
    res.json(["hello", "world"]);
}

function getContactPhone(req, res){
    res.json(["hello", "world"]);
}
