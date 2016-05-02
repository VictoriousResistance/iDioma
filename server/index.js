var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');

var app = express();

app.use(session({
  secret: 'victoriousresistance'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
app.use(passport.session());

//router
require(__dirname + '/routes.js')(app, express);

var port = process.env.PORT ? process.env.PORT : 3000;

app.listen(port, function() {
  console.log('iDioma listening, Ctrl + C to stop');
});
