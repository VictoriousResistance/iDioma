var makeHomePage = require('./views/home.js');

module.exports = function(req, res) {
  var initialState = {
    user: {
      firstName: 'Lach',
      lastName: 'Zester',
      facebookId: '123456'
    }
  };
  res.send(makeHomePage(initialState));
};