const apiRouter = require('express').Router();
const getMatches = require('../db/controllers/getMatchesGivenSelfAndOffset.js');
const addToRequests = require('../db/controllers/moveMatchIntoRequestsGivenSelfIdAndMatchId.js');
const addToRejects = require('../db/controllers/moveMatchIntoRejectsGivenSelfIdAndMatchId.js');
const changeToConnectionFromRequest = require('../db/controllers/moveRequestIntoConnectionsGivenSelfIdAndRequestId.js');
const changeToRejectFromRequest = require('../db/controllers/moveRequestIntoRejectsGivenSelfIdAndRequestId.js');
const changeToRejectFromConnection = require('../db/controllers/moveConnectionIntoRejectsGivenSelfIdAndConnectionId.js');

apiRouter.route('/matches')
  .get((req, res) => { // get matches
    getMatches(req.body.self, req.body.offset)
    .then(matches => {
      res.json(matches);
    });
  });

apiRouter.route('/relationships')
  .post((req, res) => { // post to rejects and requests
    if (req.body.newType === 'request') {
      return addToRequests(req.body.selfId, req.body.matchId)
      .then(() => {
        res.sendStatus(201);
      });
    }
    if (req.body.newType === 'reject') {
      return addToRejects(req.body.selfId, req.body.matchId)
      .then(() => {
        res.sendStatus(201);
      });
    }
    return res.sendStatus(404);
  })
  .put((req, res) => { // change relationship type

  });

apiRouter.route('/profile/:id')
  .put((req, res) => { // update profile

  });

module.exports = apiRouter;
