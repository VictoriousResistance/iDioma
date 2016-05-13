const auth = require('../auth/auth.js');
const homeHandler = require('../utils/homeHandler.js');

const getSelfProfile = require('../utils/getSelfProfile.js');
const getConnections = require('../utils/getConnections.js');
const getMatches = require('../utils/getMatches.js');
const getConnectionRequests = require('../utils/getConnectionRequests.js');
const getRoomInfo = require('../utils/getRoomInfo.js');

module.exports = (app, express) => {

  const redirectHome = (req, res) => res.redirect('/home/');

  app.use(express.static(__dirname + '/../../client'));

  app.use('/home/*', auth.checkAuth,
    (req, res, next) => {
      req.idioma = {};
      next();
    },
    getSelfProfile,
    // getRoomsList,
    getConnections,
    // getMatches,
    // getConnectionRequests,
    // getRoomInfo,
    homeHandler);

  app.get('/login', (req, res) =>
    res.send('<a href="/auth/facebook">login</a>')
  );

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
