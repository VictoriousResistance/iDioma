var express = require('express');
var rewrite = require('express-urlrewrite');



var app = express();

// app.use(rewrite('/*', '/'));

app.use(express.static(__dirname + '/../client'));
// app.use('/*', express.static(__dirname + '/../client'));

app.listen(3000, function() {
  console.log('iDioma listening on http://localhost:3000, Ctrl + C to stop');
});
