const getBasicInfo = require('../db/controllers/getUserBasicInfoGivenFBId.js');
const getLanguageInfo = require('../db/controllers/getUserLanguageInfoGivenUserId.js');
const helpers = require('../db/controllers/helpers.js');

const assignBasicInfoToReq = (user, req) => {
  req.idioma.profile = user;
  return user.id;
};

const assignLanguageInfoToReq = (languagesObj, req) => {
  req.idioma.profile.languages = languagesObj;
  return req;
};

module.exports = (req, res, next) => {
  // const fbId = req.user.id;
  const fbId = '22222';
  getBasicInfo(fbId)
  .then(helpers.pluckUser)
  .then(user => assignBasicInfoToReq(user, req))
  .then(getLanguageInfo)
  .then(helpers.pluckLanguages)
  .then(languagesObj => assignLanguageInfoToReq(languagesObj, req))
  .then(next());
};
