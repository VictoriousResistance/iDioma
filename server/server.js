var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
var sockets = require('./routes/sockets.js');
var auth = require('./auth/auth.js');
var fs = require('fs');
var path = require('path');
var http = require('http');
var https = require('https');

require('./db/index.js')(launchServer);

function launchServer() {
  var app = express();

  app.use(session({
    secret: 'victoriousresistance',
    resave: true,
    saveUninitialized: false,
  }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(passport.initialize());
  app.use(passport.session());

  require('./routes/webRoutes.js')(app, express);
  app.use('/api', auth.checkAuth, require('./routes/apiRoutes.js'));
  app.use('/service', auth.checkAuth, require('./routes/serviceRoutes.js'));

  require('./routes/twilio.js')(app);

  // ssl config for deployment
  if (process.env.PORT) {
    const httpsServer = https.createServer(
      {
        key: fs.readFileSync(path.resolve(__dirname, 'tls', 'privkey.pem')),
        cert: fs.readFileSync(path.resolve(__dirname, 'tls', 'cert.pem')),
      },
      app);

    const httpServer = http.createServer(
        (req, res) => {
          res.writeHead(301, { Location: 'https://' + req.headers.host + req.url });
          res.end();
        }
      );
    sockets(httpsServer);
    httpsServer.listen(443, () => {
      console.log('iDioma listening on port: 443');
    });
    httpServer.listen(80, () => {
      console.log('iDioma listenging on port: 80');
    });
  } else {
    const server = http.Server(app);
    sockets(server);
    server.listen(3000, () => {
      console.log('iDioma listening on port: 3000');
    });
  }
}

