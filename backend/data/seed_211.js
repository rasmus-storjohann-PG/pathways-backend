var fs = require('fs');
const path = require('path');
var csv = require('fast-csv');
var mongoose = require('mongoose');
var getMongoDbUri = require('../db').getMongoDbUri;

var pathTo211 = process.argv[2];
var mongoUri = getMongoDbUri();

var modelMapping = {
  accessibility_for_disabilities: require('../models/accessibility_for_disabilities'),
  // accreditation: require('../models/accreditation'),
  contact: require('../models/contact'),
  eligibility: require('../models/eligibility'),
  // fee: require('../models/fee'),
  funding: require('../models/funding'),
  holiday_schedule: require('../models/holiday_schedule'),
  // interpretation_services: require('../models/interpretation_services'),
  language: require('../models/language'),
  // license: require('../models/license'),
  location: require('../models/location'),
  metadata: require('../models/metadata'),
  organization: require('../models/organization'),
  payment_accepted: require('../models/payment_accepted'),
  phone: require('../models/phone'),
  physical_address: require('../models/physical_address'),
  postal_address: require('../models/postal_address'),
  program: require('../models/program'),
  regular_schedule: require('../models/regular_schedule'),
  required_document: require('../models/required_document'),
  service: require('../models/service'),
  service_area: require('../models/service_area'),
  service_at_location: require('../models/service_at_location'),
  service_taxonomy: require('../models/service_taxonomy')
}

function onError(err){
  if (err){
    console.log(err)
  }
}

function seedDatabaseFrom211(){
  fs.readdir(pathTo211, (err, files) => {
    // Filter out other files.
    var iCarolFilePattern = /(iCarolExport-BC211-)(.*)(-.*)/;
    var csvFiles = files.filter(function(filePath){
      return iCarolFilePattern.test(filePath)
    });

    var connection = mongoose.connect(mongoUri, {useMongoClient: true});
    var count = 0;
    csvFiles.forEach(file => {
      var collection = iCarolFilePattern.exec(file)[2];

      var csvFile = path.join(pathTo211, file);
      var model = modelMapping[collection];
      console.log('Importing ' + csvFile + ' to ' + collection + '...');

      csv.fromPath(csvFile, {headers:true})
        .on('data', function(data){
          if (model){
            process.stdout.write(".");
            var Model = mongoose.model(model.modelName);
            // Clear the old collection.
            Model.remove(function(err){
              var newDoc = new Model(data);
              newDoc.save({validateBeforeSave: false}, function(err){
                if (err){
                  console.log("Error during save.");
                }
              });
            });
          }
        })
        .on('end', function(){
          console.log('\nFinished ' + collection + ' records.');
          count++;
          if (count == csvFiles.length){
            mongoose.connection.close();
          }
        });
    });
  })
}

seedDatabaseFrom211();
