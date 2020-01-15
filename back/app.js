var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

// Requiring the different routes of the project
var auth = require('./routes/auth');
var book = require('./routes/book');
var services = require('./routes/services');
var app = express();

// Security options.
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "*"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Options for the mongoose connect method
const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500, 
  connectTimeoutMS: 10000,
  promiseLibrary: require('bluebird'),
};

// Connection to the database
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
mongoose.connect(url, options)
  .then(() =>  console.log('Connection to database succesful!'))
  .catch((err) => console.error(`Database connection failed : \n${err}`));

// mongoose.connect('mongodb+srv://moniUser:moniMoney@monithor-b5vvj.mongodb.net/test?retryWrites=true&w=majority', { promiseLibrary: require('bluebird') })
//   .then(() =>  console.log('connection succesful'))
//   .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));

// Registering the routes 
app.use('/api/book', book);
app.use('/api/auth', auth);
app.use('/api/service', services)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
res.json({
  message: err.message,
  error: err
});
});

module.exports = app;