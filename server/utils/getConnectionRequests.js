const getRelationships = require('../db/controllers/getUserIdsGivenSelfIdAndRelationshipType.js');

const getBasicInfo = require('../db/controllers/getUserBasicInfoGivenUserId.js');
const getLanguageInfo = require('../db/controllers/getUserLanguageInfoGivenUserId.js');
const helpers = require('../db/controllers/helpers.js');

module.exports = (req, res, next) => {
  const selfId = req.idioma.profile.id;

  getRelationships.getRequests(selfId)
  .then(getBasicInfo.bulk)
  .then(helpers.pluckUsers)
  .then(getLanguageInfo.bulk)
  .then((requests) => {
    req.idioma.connectionRequests = requests;
  })
  .then(() => next())
  .catch((error) => {
    res.status(404).send(error);
  });
};
