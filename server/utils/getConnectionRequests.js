const getRelationships = require('../db/controllers/getUserIdsGivenSelfIdAndRelationshipType.js');

module.exports = (req, res, next) => {
  const selfId = req.idioma.profile.id;
 
  getRelationships.getRequests(selfId)
  .then((requests) => {
    req.idioma.connectionRequests = requests;
    next();
  })
  .catch((error) => {
    res.sendStatus(404);
  });
};