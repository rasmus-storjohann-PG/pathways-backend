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
// '/Users/tukrre/Documents/peacegeeks/bc211/AIRSXML_2252_Export_20170109050136_BC_211.xml'
// Seeds the bc211 what, why, who taxonomies...
function store211Taxonomies(pathTo211Xml){   
    var mongoUri = getMongoDbUri();
    var parser = new xml2js.Parser();
    var data = fs.readFileSync(pathTo211Xml);
    mongoose.connect(mongoUri, {useMongoClient: true});
    parser.parseString(data, function (err, result) {
        var sites = [];
        result['Source']['Agency'].forEach(function(agency){
            if (agency['Site']){
                agency['Site'].forEach(function(site){
                    sites.push(site);
                })
            }
        });
        var siteServices = [];
        sites.forEach(function(site){
            if (site['SiteService']){
                site['SiteService'].forEach(function(ss){
                    siteServices.push(ss);
                })
            }
        });

        var numberOfTaxonomies = 0;
        siteServices.forEach(
            function(s, idxS){
                var serviceId = s['Key'];
                if (!s['Taxonomy']){
                    return;
                }
                s['Taxonomy'].forEach(function(t, idxT){
                    numberOfTaxonomies++;
                    var code = t["Code"][0];
                    // BC211 encodes their taxonomies as a JSON, so we detect them by trying to decode them.
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
                                process.exit(-1);
                            }
                            if (idxS == siteServices.length - 1 && idxT >= s['Taxonomy'].length - 1){
                                mongoose.connection.close();
                                process.exit(0)
                            }
                        });
                    }
                });
            }   
        );
        console.log('Done');
    });
}
var pathTo211Xml = process.argv[2];
store211Taxonomies(pathTo211Xml);