'use strict';

module.exports = {
  listContacts: listContacts
};

function listContacts(req, res) {
  res.json(["hello", "world"]);
}

function addContact(req, res){
    res.json(["hello", "world"]);
}

function getContact(req, res){
    res.json(["hello", "world"]);
}

function listContactPhones(req, res){
    res.json(["hello", "world"]);
}

function getContactPhone(req, res){
    res.json(["hello", "world"]);
}
