var express = require('express');
var path = require('path');

var app = express();

app.get('/', function(req, res) {
  res.redirect('/home');
});

app.use('/home', express.static(__dirname + '/../client'));

app.get('/home/*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

var port = process.env.PORT ? process.env.PORT : 3000;

app.listen(port, function() {
  console.log('iDioma listening, Ctrl + C to stop');
});
