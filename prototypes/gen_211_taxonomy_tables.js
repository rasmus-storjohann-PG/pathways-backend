var mongoose = require('mongoose'),
    getMongoDbUri = require('../db').getMongoDbUri,
    Bc211Taxonomy = require('../models/bc211_taxonomy'),
    csv = require('fast-csv'),
    fs = require('fs')
    util = require('util');

var mongoUri = getMongoDbUri();
console.log(mongoUri);
mongoose.connect(mongoUri, {useMongoClient: true}, function(err){
    if (err){
        console.log("ERROR");
        console.log(err);
        process.exit(-1);
    }

    Bc211Taxonomy.find({}).exec().then(function(docs){
        var whos = [];
        var whats = [];
        var whys = [];
        
        console.log("hello");
        docs.forEach(function(t){
            if (t.who){
                whos.push(t.who)
            }
            if (t.what){
                whats.push(t.what)
            }
            if (t.why){
                whys.push(t.why)
            }
        });
        whos = Array.from(new Set(whos));
        whats = Array.from(new Set(whats));
        whys = Array.from(new Set(whys));

        fs.appendFileSync('whos.csv', "Term,Count\n"); 
        fs.appendFileSync('whats.csv', "Term,Count\n"); 
        fs.appendFileSync('whys.csv', "Term,Count\n"); 
        
        whos.forEach(function(w){
            Bc211Taxonomy.count({who: w}).exec().then(function(c){
                var entry = util.format("%s,%s\n", w, c);  
                fs.appendFileSync('whos.csv', entry);                
            });
        });
        whats.forEach(function(w){
            Bc211Taxonomy.count({what: w}).exec().then(function(c){
                var entry = util.format("%s,%s\n", w, c);  
                fs.appendFileSync('whats.csv', entry);            
            });
        });
        whys.forEach(function(w){
            Bc211Taxonomy.count({why: w}).exec().then(function(c){
                var entry = util.format("%s,%s\n", w, c);  
                fs.appendFileSync('whys.csv', entry);             
            });
        });

        // console.log(x);
        // mongoose.connection.close();
        // process.exit();
    });    
});





