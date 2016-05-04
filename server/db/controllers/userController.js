var User = require('../models/userModel.js');

module.exports = {
  get: function (req, res) {
    User.findAll()
      .then(function(users) {
        res.json(users);
      });
  }
}
