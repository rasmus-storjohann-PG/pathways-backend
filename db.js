var mongodbUri = require('mongodb-uri');

module.exports = {
  getMongoDbUri: function(){
    var error = false;
    if (!process.env.PATHWAYS_MONGO_HOST){
      console.log("$PATHWAYS_MONGO_HOST not set!");
    } else if (!process.env.PATHWAYS_MONGO_PORT){
      console.log("$PATHWAYS_MONGO_PORT not set!");
    } else if (!process.env.PATHWAYS_MONGO_DB){
      console.log("$PATHWAYS_MONGO_DB not set!");
    } else if (!process.env.PATHWAYS_MONGO_USER){
      console.log("$PATHWAYS_MONGO_USER not set!");
    } else if (!process.env.PATHWAYS_MONGO_PASS){
      console.log("$PATHWAYS_MONGO_PASS not set!");
    }

    return mongodbUri.format(
      {
        username: process.env.PATHWAYS_MONGO_USER,
        password: process.env.PATHWAYS_MONGO_PASS,
        hosts: [
          {
            host: process.env.PATHWAYS_MONGO_HOST,
            port: process.env.PATHWAYS_MONGO_PORT
          }
        ],
        database: process.env.PATHWAYS_MONGO_DB
      }
    );
  }
}
