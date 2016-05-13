const getRelatedUserIds = require('../db/controllers/getUserIdsGivenSelfIdAndRelationshipType.js');

const getBasicInfo = require('../db/controllers/getUserBasicInfoGivenUserId.js');
const getLanguageInfo = require('../db/controllers/getUserLanguageInfoGivenUserId.js');
const helpers = require('../db/controllers/helpers.js');

function inspect(i) {
  console.log('INSPECTOR');
  console.log(i);
  return i;
};

const assignConnectionsToReq = (connections, req) =>
  req.idioma.profile.connections = connections;

module.exports = (req, res, next) => {
  const user = req.idioma.profile;
  getRelatedUserIds.getConnections(user.id)
  .then(results => results.map(
    result => result.userid
  ))
  .then(getBasicInfo.bulk)
  .then(helpers.pluckUsers)
  .then(getLanguageInfo.bulk)
  .then(connections =>
    req.idioma.profile.connections = connections
  )
  .then(() => next());
};

