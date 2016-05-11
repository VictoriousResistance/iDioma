const getUserIdsGivenSelfIdAndRelationshipType = (selfId, relationshipType) => {

};

exports.getConnections = (selfId) => {
  return getUserIdsGivenSelfIdAndRelationshipType(selfId, 'connection');
};

exports.getRejects = (selfId) => {
  return getUserIdsGivenSelfIdAndRelationshipType(selfId, 'reject');
};

exports.getRequests = (selfId) => {
  return getUserIdsGivenSelfIdAndRelationshipType(selfId, 'request');
};

