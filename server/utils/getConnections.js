const getRelatedUserIds = require('../db/controllers/getUserIdsGivenSelfIdAndRelationshipType.js');

const getBasicInfo = require('../db/controllers/getUserBasicInfoGivenUserId.js');
const getLanguageInfo = require('../db/controllers/getUserLanguageInfoGivenUserId.js');
const helpers = require('../db/controllers/helpers.js');

module.exports = (req, res, next) => {
  const user = req.idioma.profile;
  getRelatedUserIds.getConnections(user.id)
  .then(getBasicInfo.bulk)
  .then(helpers.pluckUsers)
  .then(getLanguageInfo.bulk)
  .then(connections =>
    req.idioma.connections = connections
  )
  .then(() => next())
  .catch((error) => {
    res.status(404).send(error);
  });
};

