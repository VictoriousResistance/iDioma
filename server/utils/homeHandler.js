var makeHomePage = require('../views/home.js');

module.exports = function(req, res) {
  var initialState = req.idioma;
  res.send(makeHomePage(initialState));
};