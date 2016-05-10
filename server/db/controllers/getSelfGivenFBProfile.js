var User = require('../models/userModel.js');

module.exports = (req, res, next) => {
  const fbID = req.user.id;
  req.idioma = {};

  User.find(
    {
      where: { facebookId: fbID },
    }
  ).then((user) => {
    req.idioma.profile = user.dataValues;
    next();
  });
};