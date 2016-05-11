const db = require('../db.js');
const Sequelize = require('sequelize');

const getUserIdsGivenSelfIdAndRelationshipType = (selfId, relationshipType) => {
  const queryStr = `SELECT users.id FROM users 
                      INNER JOIN relationships 
                        ON users.id = relationships.user1Id OR users.id = relationships.user2Id 
                      WHERE users.id = ${selfId} AND relationships.type = ${relationshipType}
                    `;
  return db.query(queryStr, { type: Sequelize.QueryTypes.SELECT });
};

exports.getConnections = (selfId) => getUserIdsGivenSelfIdAndRelationshipType(selfId, 'connection');

exports.getRejects = (selfId) => getUserIdsGivenSelfIdAndRelationshipType(selfId, 'reject');

exports.getRequests = (selfId) => getUserIdsGivenSelfIdAndRelationshipType(selfId, 'request');

