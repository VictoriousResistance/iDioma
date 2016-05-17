const getBasicInfo = require('../db/controllers/getUserBasicInfoGivenFBId.js');
const getLanguageInfo = require('../db/controllers/getUserLanguageInfoGivenUserId.js');
const helpers = require('../db/controllers/helpers.js');

module.exports = (req, res, next) => {
  const fbId = req.user.id;
  // ZACH: should send back 500 errors not 404
  // const fbId = '1556463314683658';
  getBasicInfo(fbId)
  .then(helpers.pluckUser)
  .then(user => {
    req.idioma.profile = user;
    return user.id;
  })
  .then(getLanguageInfo)
  .then(helpers.pluckLanguages)
  .then(languagesObj => {
    req.idioma.profile.languages = languagesObj;
  })
  .then(() => next())
  .catch((error) => {
    res.status(404).send(error);
  });
};
