var express = require('express');
var SwaggerExpress = require('swagger-express-mw');
var swaggerUi = require('swagger-ui-express');
var YAML = require('yamljs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')
var getMongoDbUri = require('./db').getMongoDbUri;

var app = express();
var config = {
  appRoot: __dirname // required config
};

var mongoUri = getMongoDbUri();
console.log("Connecting to " + mongoUri + "...");
if (!mongoUri) {
  process.exit();
}
mongoose.connect(mongoUri);

//Get the default connection
var db = mongoose.connection;
mongoose.Promise = Promise;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

// install the swagger ui middleware, for ease of use.
var swaggerDocYaml = YAML.load('./api/swagger/swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocYaml));

// TODO : This is to not allow 304 responses, and we should remove this
//        once the OpenReferral API supports 304.
app.use(function(req, res, next) {
  req.headers['if-none-match'] = 'no-match-for-this';
  next();
});

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  // install response validation listener (this will only be called if there actually are any errors or warnings)
  swaggerExpress.runner.on('responseValidationError', function(validationResponse, req, res) {
    console.log(JSON.stringify(validationResponse.errors));
    res.status(500).json(validationResponse.errors);
  });

  var port = process.env.PORT || 3000;
  app.listen(port);
  console.log('Running on http://127.0.0.1:' + port);

});
module.exports = app;
