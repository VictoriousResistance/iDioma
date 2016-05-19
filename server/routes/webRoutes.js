const auth = require('../auth/auth.js');
const homeHandler = require('../utils/homeHandler.js');

const getSelfProfile = require('../utils/getSelfProfile.js');
const getConnections = require('../utils/getConnections.js');
const getMatches = require('../utils/getMatches.js');
const getConnectionRequests = require('../utils/getConnectionRequests.js');
const getRoomsInfo = require('../utils/getRoomInfo.js');

const path = require('path');

const crypto = require('crypto');
const secret = require('../auth/config.js').SECRET;

module.exports = (app, express) => {

  const redirectHome = (req, res) => res.redirect('/home/');
  
  app.use(express.static(__dirname + '/../../client'));

  app.use('/home/*', auth.checkAuth,


    // ZACH:  create an initial state file
    (req, res, next) => {
      req.idioma = { connections: {}, matches: {}, connectionRequests: {} };
      next();
    },
    getSelfProfile,
    getConnections,
    getMatches,
    getConnectionRequests,
    getRoomsInfo,
    homeHandler);

  app.get('/login', (req, res) => {
    res.sendFile(path.resolve('server', 'views', 'login.html'));
  });

  app.get('/', redirectHome);
  app.get('/home', redirectHome);


  app.get('/auth/facebook', auth.handleLogin, redirectHome);
  app.get('/auth/facebook/callback', auth.handleCallback);

  app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy(() => {
      console.log('session after logout', req.session);
      console.log('user after logout', req.user);
      res.redirect('/login');
    });
  });

  if (process.env.PORT) {
    app.post('/', (req, res, next) => {
      if (req.body.signed_request) {
        console.log('req.query.signed_request', req.query.signed_request);
        const request = req.body.signed_request.split('.');
        console.log('request', request);
        const signature = request[0];
        console.log('signature', signature);
        const payload = request[1];
        console.log('payload', payload);
        const decodedSignature = new Buffer(signature, 'base64').toString('ascii');
        const expectedSignature = new Buffer(crypto.createHmac('sha256', secret).update(payload).digest('base64'), 'base64').toString('ascii');
                                  // .replace(/\//g, '_').replace(/\+/g, '-').replace(/\=/g, '');
        console.log('expectedSignature', expectedSignature);
        if (decodedSignature === expectedSignature) {
          const data = JSON.parse(new Buffer(payload, 'base64').toString('ascii'));
          console.log('data', data);
          console.log('user_id', data.user_id);
          req.user = {};
          req.user.id = data.user_id;
          req.session = {};
          req.session.passport = {};
          req.session.passport.user = data.user_id;
          return next();
        }
        return res.sendStatus(404);
      }
      return res.sendStatus(404);
    }, redirectHome);
  }
};
