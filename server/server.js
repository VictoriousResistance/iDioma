var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var sockets = require('./config/sockets');

require('./db/index.js')();

var app = express();

app.use(session({
  secret: 'victoriousresistance',
  resave: true, 
  saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

//router and sockets
require('./routes.js')(app, express);
sockets(require('http').Server(app));

var port = process.env.PORT ? process.env.PORT : 3000;

app.listen(port, function() {
  console.log('iDioma listening on port: ' + port);
});
