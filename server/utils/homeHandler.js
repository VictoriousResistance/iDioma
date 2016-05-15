var makeHomePage = require('../views/home.js');

module.exports = function(req, res) {
  console.log(req.idioma);
  var initialState = req.idioma;
  res.send(makeHomePage(initialState));
};