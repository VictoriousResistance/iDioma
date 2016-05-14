const db = require('../db.js');
const Sequelize = require('sequelize');

const pluckUserIds = results =>
  results.map(
    result => result.userid
  );

const getUserIdsGivenSelfIdAndRelationshipType = (selfId, relationshipType) => {
  const queryStr = `
                    (
                      SELECT user1Id as userid FROM relationships 
                        WHERE user2Id = '${selfId}' AND type = '${relationshipType}'
                    )
                    UNION 
                    (
                      SELECT user2Id as userid FROM relationships 
                        WHERE user1Id = '${selfId}' AND type = '${relationshipType}'
                    )
                    `;
  return db.query(queryStr, { type: Sequelize.QueryTypes.SELECT });
};

exports.getConnections = (selfId) => getUserIdsGivenSelfIdAndRelationshipType(selfId, 'connection').then(pluckUserIds);

exports.getRejects = (selfId) => getUserIdsGivenSelfIdAndRelationshipType(selfId, 'reject');

exports.getRequests = (selfId) => {
  const queryStr = `
                    SELECT relationships.user1Id AS userid FROM users
                      INNER JOIN relationships 
                        ON users.id = relationships.user2Id 
                      WHERE users.id = ${selfId} AND relationships.type = 'request'
                    `;
  return db.query(queryStr, { type: Sequelize.QueryTypes.SELECT }).then(pluckUserIds);
};
