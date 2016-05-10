var getUserIdsGivenSelfIdAndRelationshipType = function(selfId, relationshipType) {

};

exports.getConnections = function(selfId) {
  return getUserIdsGivenSelfIdAndRelationshipType(selfId, 'connection');
};

exports.getRejects = function(selfId) {
  return getUserIdsGivenSelfIdAndRelationshipType(selfId, 'reject');
};

exports.getRequests = function(selfId) {
  return getUserIdsGivenSelfIdAndRelationshipType(selfId, 'request');
};

