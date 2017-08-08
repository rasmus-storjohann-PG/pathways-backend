var fs = require('fs');
const path = require('path');
var csv = require('fast-csv');
var mongoose = require('mongoose');
var getMongoDbUri = require('../db').getMongoDbUri;
var mongoUri = getMongoDbUri();

var modes = {
  icarol: {
    openReferralFilePattern: /(iCarolExport-BC211-)(.*)(-.*)/,
    regexCollectionIdx: 2
  },
  testing: {
    openReferralFilePattern: /(.*)(\.csv)/,
    regexCollectionIdx: 1
  }
}

var pathTo211 = process.argv[2];
var mode = process.argv[3];

if (!modes[mode]){
  console.log("ERROR: Invalid mode, use one of [icarol, testing]");
  process.exit(-1);
}

var openReferralFilePattern = modes[mode].openReferralFilePattern;
var regexCollectionIdx = modes[mode].regexCollectionIdx;

var modelMapping = {
  accessibility_for_disabilities: require('../models/accessibility_for_disabilities'),
  // accreditation: require('../models/accreditation'),
  contact: require('../models/contact'),
  contacts: require('../models/contact'),
  eligibility: require('../models/eligibility'),
  // fee: require('../models/fee'),
  funding: require('../models/funding'),
  holiday_schedule: require('../models/holiday_schedule'),
  // interpretation_services: require('../models/interpretation_services'),
  language: require('../models/language'),
  languages: require('../models/language'),
  // license: require('../models/license'),
  location: require('../models/location'),
  locations: require('../models/location'),
  metadata: require('../models/metadata'),
  organization: require('../models/organization'),
  organizations: require('../models/organization'),
  payment_accepted: require('../models/payment_accepted'),
  payments_accepted: require('../models/payment_accepted'),
  phone: require('../models/phone'),
  phones: require('../models/phone'),
  physical_address: require('../models/physical_address'),
  physical_addresses: require('../models/physical_address'),
  postal_address: require('../models/postal_address'),
  postal_addresses: require('../models/postal_address'),
  program: require('../models/program'),
  programs: require('../models/program'),
  regular_schedule: require('../models/regular_schedule'),
  regular_schedules: require('../models/regular_schedule'),
  required_document: require('../models/required_document'),
  required_documents: require('../models/required_document'),
  service: require('../models/service'),
  services: require('../models/service'),
  service_area: require('../models/service_area'),
  service_areas: require('../models/service_area'),
  service_at_location: require('../models/service_at_location'),
  services_at_location: require('../models/service_at_location'),
  service_taxonomy: require('../models/service_taxonomy'),
  services_taxonomy: require('../models/service_taxonomy')
}

function onError(err){
  if (err){
    console.log(err)
  }
}

function seedDatabaseFrom211(){
  fs.readdir(pathTo211, (err, files) => {
    // Filter out other files.
    var csvFiles = files.filter(function(filePath){
      return openReferralFilePattern.test(filePath)
    });

    var connection = mongoose.connect(mongoUri, {useMongoClient: true});
    var count = 0;
    csvFiles.forEach(file => {
      var collection = openReferralFilePattern.exec(file)[regexCollectionIdx];
      var csvFile = path.join(pathTo211, file);
      var model = modelMapping[collection];
      console.log('Importing ' + csvFile + ' to ' + collection + '...');
      if (model){
        var Model = mongoose.model(model.modelName);
        Model.remove({}, function(err){
          if (err){
            console.log("ERROR: Couldn't remove " + collection);
          } else {
            csv.fromPath(csvFile, {headers:true})
              .on('error', function(err){
                console.log("ERROR: " + err)
              })
              .on('data', function(data){
                process.stdout.write(".");
                console.log(Model.collection.collectionName)
                // Clear the old collection.
                var newDoc = new Model(data);
                newDoc.save({validateBeforeSave: false}, function(err){
                  if (err){
                    console.log("Error during save.");
                  }
                });
              })
              .on('end', function(){
                console.log('\nFinished ' + collection + ' records.');
                count++;
                if (count == csvFiles.length){
                  mongoose.connection.close();
                }
              });
          }
        });

      } else {
        console.log("ERROR: Model not found for collection: " + collection);
      }
    });
  })
}

seedDatabaseFrom211();
