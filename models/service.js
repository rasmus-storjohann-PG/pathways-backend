var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = new Schema({
  id:  { type: String, required: true, index: true},
  organization_id: { type: String, required: true},
  program_id: String,
  name: { type: String, required: true },
  alternate_name: String,
  description: String,
  url: String,
  status: { type: String, required: true },
  interpretation_services: String,
  application_process: String,
  wait_time: String,
  fees: String,
  accreditations: String,
  licenses: String,
  taxonomy_ids: String
}, {collection: 'service', validateBeforeSave:false});

// We have a text index on description for key word searches.
ServiceSchema.index({name: 'text', description: 'text'}, {name: "textIndex"});

module.exports = mongoose.model('Service', ServiceSchema );
