const getBasicInfo = require('../db/controllers/getUserBasicInfoGivenFBId.js');
const getLanguageInfo = require('../db/controllers/getUserLanguageInfoGivenUserId.js');

const assignBasicInfoToReq = (user, req) => {
  req.idioma.profile = {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    description: user.description,
    photoUrl: user.photo_url,
  };
  return user.id;
};

const assignLanguageInfoToReq = (offerOrLearn, req) => {
  req.idioma.profile.canTeach = offerOrLearn[0];
  req.idioma.profile.willLearn = offerOrLearn[1];
};

module.exports = (req, res, next) => {
  // const fbId = req.user.id;
  const fbId = '22222';
  getBasicInfo(fbId)
  .then(basicInfo => assignBasicInfoToReq(basicInfo[0], req))
  .then(getLanguageInfo)
  .then(languageDetails => assignLanguageInfoToReq(languageDetails, req))
  .then(next());
};
