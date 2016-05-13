const getRelatedUserIds = require('../db/controllers/getUserIdsGivenSelfIdAndRelationshipType.js');

const getBasicInfo = require('../db/controllers/getUserBasicInfoGivenUserId.js');
const getLanguageInfo = require('../db/controllers/getUserLanguageInfoGivenUserId.js');
const helpers = require('../db/controllers/helpers.js');


const assignConnectionsToReq = (connections, req) =>
  req.idioma.profile.connections = connections;

module.exports = (req, res, next) => {
  const test = ['111213', '12345', '678910'];
  getBasicInfo.bulk(test)
  .then(helpers.pluckUsers)
  .then(getLanguageInfo.bulk)
  .then((connections) => assignConnectionsToReq(connections, req))
  .then(next());
};
