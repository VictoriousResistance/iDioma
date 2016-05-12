const Relationships = require('../models/relationshipModel.js');

module.exports = (selfId, matchId) => (
  Relationships.create({
    type: 'reject',
    user1Id: selfId,
    user2Id: matchId,
  })
);
