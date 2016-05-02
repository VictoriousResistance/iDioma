var path = require('path');
module.exports = function(app, express) {
  app.get('/', function(req, res) {
    res.redirect('/home');
  });

  app.use('/home', express.static(__dirname + '/../client'));

  app.get('/home/*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
  });

  app.get('/login', function(req, res) {

  });

  app.get('/auth/facebook/callback', function(req, res) {

  });
};
