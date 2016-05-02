var path = require('path');
var auth = require(__dirname + '/auth/auth.js');

module.exports = function(app, express) {
  app.get('/', auth.checkAuth, function(req, res) {
    res.redirect('/home');
  });

  app.use('/home', auth.checkAuth, express.static(__dirname + '/../client'));

  app.get('/home/*', auth.checkAuth, function(req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
  });

  app.get('/login', auth.handleLogin, function(req, res) {

  });

  app.get('/auth/facebook/callback', auth.handleCallback, function(req, res) {
    res.redirect('/home');
  });
};
