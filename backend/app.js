var express = require('express');
var SwaggerExpress = require('swagger-express-mw');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')

var index = require('./routes/index');
var pathways = require('./routes/pathways');

var app = express();
var config = {
  appRoot: __dirname // required config
};

var mongoUri = process.env.PATHWAYS_MONGO_URI
if (!mongoUri){
  console.error("Error!!!! Set PATHWAYS_MONGO_URI environment var!");
  process.exit();
}
mongoose.connect(mongoUri);

//Get the default connection
var db = mongoose.connection;
mongoose.Promise = Promise;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', index);
app.use('/pathways', pathways);

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 3000;
  app.listen(port);
  console.log('Running on http://127.0.0.1:' + port);
  
});
module.exports = app;
