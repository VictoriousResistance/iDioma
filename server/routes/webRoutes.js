const auth = require('../auth/auth.js');
const homeHandler = require('../utils/homeHandler.js');

const getSelfProfile = require('../utils/getSelfProfile.js');
const getConnections = require('../utils/getConnections.js');
const getMatches = require('../utils/getMatches.js');
const getConnectionRequests = require('../utils/getConnectionRequests.js');
const getRoomsInfo = require('../utils/getRoomInfo.js');

const path = require('path');

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

};
