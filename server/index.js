var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(__dirname + '/../client'));

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'))
});

app.listen(3000, function() {
  console.log('iDioma listening on http://localhost:3000, Ctrl + C to stop');
});
