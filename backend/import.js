var fs = require('fs');
const path = require('path');
var csv = require('fast-csv');
var mongoose = require('mongoose');

// TODO: Change this to your own path!!!
var pathTo211 = '/Users/tukrre/Documents/peacegeeks/bc211/iCarolExport-BC211-HSDS-20170721_170621'

var modelMapping = {
  accessibility_for_disabilities: require('./models/accessibility_for_disabilities'),
  // accreditation: require('./models/accreditation'),
  contact: require('./models/contact'),
  eligibility: require('./models/eligibility'),
  // fee: require('./models/fee'),
  funding: require('./models/funding'),
  holiday_schedule: require('./models/holiday_schedule'),
  // interpretation_services: require('./models/interpretation_services'),
  language: require('./models/language'),
  // license: require('./models/license'),
  location: require('./models/location'),
  metadata: require('./models/metadata'),
  organization: require('./models/organization'),
  payment_accepted: require('./models/payment_accepted'),
  phone: require('./models/phone'),
  physical_address: require('./models/physical_address'),
  postal_address: require('./models/postal_address'),
  program: require('./models/program'),
  regular_schedule: require('./models/regular_schedule'),
  required_document: require('./models/required_document'),
  service: require('./models/service'),
  service_area: require('./models/service_area'),
  service_at_location: require('./models/service_at_location'),
  service_taxonomy: require('./models/service_taxonomy')
}

function readFromCsv(csvFile, collection, model){
  csv.fromPath(csvFile, {headers:true})
    .on('data', function(data){
      if (model){
        process.stdout.write(".");
        var Model = mongoose.model(model.modelName);
        var record = new Model(data);
        record.save({validateBeforeSave: false}, function(err){
          if (err){
            console.log("Error during save.");
          }
        });
      }
    })
    .on('end', function(){
      console.log('\nFinished ' + collection + ' records.');
    });
}

function seedDatabaseFrom211(){
  fs.readdir(pathTo211, (err, files) => {
    console.log(mongoUri);
    var mongoUri = process.env.PATHWAYS_MONGO_URI;
    if (!mongoUri){
      console.error("Error!!!! Set PATHWAYS_MONGO_URI environment var!");
      process.exit();
    }

    mongoose.connect(mongoUri, {useMongoClient: true});
    files.forEach(file => {
      var iCarolFilePattern = /(iCarolExport-BC211-)(.*)(-.*)/;
      if (iCarolFilePattern.test(file)){
        var collection = iCarolFilePattern.exec(file)[2]
        var csvFile = path.join(pathTo211, file);
        var model = modelMapping[collection];
        console.log('Importing ' + csvFile + ' to ' + collection + '...');
        readFromCsv(csvFile, collection, model);
      }
    });
    mongoose.connection.close();
  })
}

seedDatabaseFrom211();
