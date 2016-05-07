var User = require('../models/userModel.js');

module.exports = {
  getAllUsers: function (req, res) {
    User.findAll()
      .then(function(users) {
        res.status(201).json(users);
      })
      .catch(function(error) {
	      res.sendStatus(404);
	      throw error;
    });
  }

}
