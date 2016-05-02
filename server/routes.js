var path = require('path');
var auth = require(__dirname + '/auth/auth.js');

module.exports = function(app, express) {
  app.get('/', auth.checkAuth, function(req, res) {
    res.redirect('/home');
  });

  app.get('/login', function(req, res) {
    res.send('<a href="/auth/facebook">login</a>');
  });

  app.use('/home', auth.checkAuth, express.static(__dirname + '/../client'));

  app.get('/home/*', auth.checkAuth, function(req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
  });

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
};
