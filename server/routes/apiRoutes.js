const apiRouter = require('express').Router();
const getMatches = require('../db/controllers/getMatchesGivenSelfAndOffset.js');
const addToRequests = require('../db/controllers/moveMatchIntoRequestsGivenSelfIdAndMatchId.js');
const addToRejects = require('../db/controllers/moveMatchIntoRejectsGivenSelfIdAndMatchId.js');
const changeToRejectFromConnection = require('../db/controllers/moveConnectionIntoRejectsGivenSelfIdAndConnectionId.js');
const changeToConnectionFromRequest = require('../db/controllers/moveRequestIntoConnectionsGivenSelfIdAndRequestId.js');
const changeToRejectFromRequest = require('../db/controllers/moveRequestIntoRejectsGivenSelfIdAndRequestId.js');

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
    if (req.body.oldType === 'connection') {
      return changeToRejectFromConnection(req.body.selfId, req.body.connectionId)
        .then(() => {
          res.sendStatus(200);
        });
    }
    if (req.body.oldType === 'request') {
      if (req.body.newType === 'connection') {
        return changeToConnectionFromRequest(req.body.selfId, req.body.requestId)
          .then(() => {
            res.sendStatus(200);
          });
      }
      if (req.body.newType === 'reject') {
        return changeToRejectFromRequest(req.body.selfId, req.body.requestId)
          .then(() => {
            res.sendStatus(200);
          });
      }
      return res.sendStatus(404);
    }
    return res.sendStatus(404);
  });

apiRouter.route('/profile/:id')
  .put((req, res) => { // update profile

  });

module.exports = apiRouter;
