const getBasicInfo = require('../db/controllers/getUserBasicInfoGivenFBId.js');
const getLanguageInfo = require('../db/controllers/getUserLanguageInfoGivenUserId.js');

var assignBasicInfoToReq = (user, req) => {
  req.idioma.profile = {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    description: user.description,
    photoUrl: user.photo_url,
  };
  return user.id;
};

var assignLanguageInfoToReq = results => {
  const user = results[0];
  req.idioma.profile = {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    description: user.description,
    photoUrl: user.photo_url,
  };
};

module.exports = (req, res, next) => {
  // const fbId = req.user.id;
  const fbId = '11111';
  getBasicInfo(fbId)
  .then(results => assignBasicInfoToReq(results[0], req))
  .then(getLanguageInfo)
  .then(results => console.log('herreererere', results))
  .then(next());
};
