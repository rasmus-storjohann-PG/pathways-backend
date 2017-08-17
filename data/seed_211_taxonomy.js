var mongoose = require('mongoose'),
    getMongoDbUri = require('../db').getMongoDbUri,
    fs = require('fs'),
    xml2js = require('xml2js'),
    JSON5 = require('json5'),
    Bc211Taxonomy = require('../models/bc211_taxonomy');



function isJsonString(str) {
    try {
        JSON5.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

// Seeds the bc211 what, why, who taxonomies...
function store211Taxonomies(){   
    var mongoUri = getMongoDbUri();
    var connection = mongoose.connect(mongoUri, {useMongoClient: true});
    var parser = new xml2js.Parser();
    fs.readFile('/Users/tukrre/Documents/peacegeeks/bc211/AIRSXML_2252_Export_20170109050136_BC_211.xml', function(err, data) {
        parser.parseString(data, function (err, result) {
            result['Source']['Agency'].forEach(function(agency){
                if (agency['Site']){
                    agency['Site'].forEach(function(site){
                        site['SiteService'].forEach(function(s){
                            var serviceId = s['Key'];
                            s['Taxonomy'].forEach(function(t){
                                var code = t["Code"][0];
                                if (isJsonString(code)){
                                    var codeObj = JSON5.parse(code);
                                    var newTaxonomy = new Bc211Taxonomy({
                                        service_id: serviceId,
                                        what: codeObj.what,
                                        who: codeObj.who,
                                        why: codeObj.why
                                    });
                                    newTaxonomy.save(function(err){
                                        if (err){
                                        console.log("Error during save.");
                                        }
                                    });
                                }
                            })
                        });
                    }); 
                }  
            })
            console.log('Done');
        });
    });
}

store211Taxonomies();