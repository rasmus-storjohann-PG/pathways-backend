var mongodbUri = require('mongodb-uri');

module.exports = {
  getMongoDbUri: function(){
    var error = false;
    if (!process.env.PATHWAYS_MONGO_HOST ||
      !process.env.PATHWAYS_MONGO_PORT ||
      !process.env.PATHWAYS_MONGO_DB) {
        console.log("Error: Not all environment vars set!");
        process.exit(-1);
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
