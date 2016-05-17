var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var sockets = require('./routes/sockets.js');
var auth = require('./auth/auth.js');

require('./db/index.js')(launchServer);

function launchServer() {
  var app = express();

// ZACH: have a routes file

  app.use(session({
    secret: 'victoriousresistance',
    resave: true,
    saveUninitialized: false,
  }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(passport.initialize());
  app.use(passport.session());

  //router and sockets
  require('./routes/webRoutes.js')(app, express);
  app.use('/api',
    // auth.checkAuth,
    require('./routes/apiRoutes.js'));

// ZACH: sockets in a different file
  var server = require('http').Server(app);
  sockets(server);

  //twilio
  require('./routes/twilio.js')(app);
  
  var port = process.env.PORT || 3000;

  server.listen(port, function() {
    console.log('iDioma listening on port: ' + port);
  });
}

