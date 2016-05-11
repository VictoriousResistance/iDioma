const getBasicInfo = require('../db/controllers/getSelfBasicInfoGivenFBProfile.js');

module.exports = (req, res, next) => {
  console.log('reached');
  const fbId = req.user.id;
  getBasicInfo(fbId).then(results => {
    const user = results[0];
    req.idioma.profile = {
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      description: user.description,
      photoUrl: user.photo_url,
    };
  }).then(next());
};
