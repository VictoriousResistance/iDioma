const getBasicInfo = require('../db/controllers/getUserBasicInfoGivenFBId.js');
const getLanguageInfo = require('../db/controllers/getUserLanguageInfoGivenUserId.js');
const helpers = require('../db/controllers/helpers.js');

module.exports = (req, res, next) => {
  // const fbId = req.user.id;
  const fbId = '22222';
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
  .then(() => next());
};
