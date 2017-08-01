'use strict';
var Service = require('../../models/service');

module.exports = {
  listServices: listServices,
  getService: getService
};

function listServices(req, res) {
  var page = req.swagger.params.page.value;
  var per_page = req.swagger.params.per_page.value;
  var skip = per_page * (page - 1)

  Service.find({}, {_id: 0}).skip(skip).limit(per_page) // pagination
  .then(
    function(results){
      res.json(results);
    }
  );
}

function getService(req, res){
  var serviceId = req.swagger.params.service_id.value;
  Service.findOne({id: serviceId}, {_id: 0}).then(function(service){
    res.json(new Array(service));
  });
}
