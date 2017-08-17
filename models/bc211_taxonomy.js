var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Bc211TaxonomySchema = new Schema({
    service_id: String,
    who: String,
    what: String,
    why: String
}, { collection : 'bc211_taxonomy' });

module.exports = mongoose.model('Bc211Taxonomy', Bc211TaxonomySchema );