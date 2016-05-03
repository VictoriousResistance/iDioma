var path = require('path');
var auth = require(__dirname + '/auth/auth.js');
var homeHandler = require('./homeHandler.js');

module.exports = function(app, express) {

  app.use(express.static('../client'));

  app.get('/', auth.checkAuth, function(req, res) {
    res.redirect('/home');
  });

  app.get('/login', function(req, res) {
    res.send('<a href="/auth/facebook">login</a>');
  });

  app.use('/home', auth.checkAuth, homeHandler);

  app.get('/home/*', auth.checkAuth, homeHandler);

  app.get('/auth/facebook', auth.handleLogin, function(req, res) {
    res.redirect('/home');
  });

  app.get('/auth/facebook/callback', auth.handleCallback);

  app.get('/logout', function(req, res) {
    req.logout();
    req.session.destroy(function() {
      console.log('session after logout', req.session);
      console.log('user after logout', req.user);
      res.redirect('/login');
    });
  });

  app.get('/chat/:id', function(req, res) {
    var users = {
      initiator: req.user,
      recipient: req.params.id
    };
    res.send(users);
  });
};
