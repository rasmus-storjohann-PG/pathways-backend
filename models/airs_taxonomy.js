var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AirsTaxonomySchema = new Schema({
  Code:  String,
  "Code+B1": String,
  Definition: String,
  Keywords: String,
  Notes: String
}, { collection : 'airs_taxonomy' });

module.exports = mongoose.model('AirsTaxonomy', AirsTaxonomySchema );
