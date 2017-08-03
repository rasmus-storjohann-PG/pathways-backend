var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    assert = require('assert'),
    getMongoDbUri = require('../db').getMongoDbUri;

var mongoUri = getMongoDbUri();
var mongoclient = new MongoClient(new Server(mongoUri));

MongoClient.connect(mongoUri, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");

  db.collection('airs_taxonomies').dropIndexes()
  db.collection('airs_taxonomies').createIndex(
      {
          "Code+B1": "text",
          Definition: "text",
          Keywords: "text"
      },
      {
          weights: {
              "Code+B1": 5,
              Keywords: 10,
              Definition: 8
          },
          name: "TextIndex"
      }
  )

  db.collection('service').dropIndexes()
  db.collection('service').createIndex(
      {
          name: "text",
          description: "text",
          alternate_name: "text"
      },
      {
          weights: {
              name: 8,
              description: 10,
              alternate_name: 3
          },
          name: "TextIndex"
      }
  )
  //
  db.collection('service_area').dropIndexes()
  db.collection('service_taxonomy').dropIndexes()
  db.collection('service_area').createIndex({service_id: 2})
  db.collection('service_taxonomy').createIndex({service_id: 2})

  db.close();
});
