const apiRouter = require('express').Router();

// controller for /matches
const getMatches = require('../db/controllers/getMatchesGivenSelfAndOffset.js');

// controllers for /relationships
const addToRequests = require('../db/controllers/moveMatchIntoRequestsGivenSelfIdAndMatchId.js');
const addToRejects = require('../db/controllers/moveMatchIntoRejectsGivenSelfIdAndMatchId.js');
const changeToRejectFromConnection = require('../db/controllers/moveConnectionIntoRejectsGivenSelfIdAndConnectionId.js');
const changeToConnectionFromRequest = require('../db/controllers/moveRequestIntoConnectionsGivenSelfIdAndRequestId.js');
const changeToRejectFromRequest = require('../db/controllers/moveRequestIntoRejectsGivenSelfIdAndRequestId.js');
const findOrCreateRoom = require('../db/controllers/findOrCreateRoomGivenUserIds.js');

// controllers for /profile/:id
const updateDescription = require('../db/controllers/updateDescriptionGivenBodyAndUserId.js');
const updateLanguages = require('../db/controllers/updateLanguagesGivenTypeAndUserId');

// controller for /rooms
const findRoom = require('../db/controllers/findOrCreateRoomGivenUserIds');

// controllers /messages
const getMessages = require('../db/controllers/getMessagesGivenRoomId');
const postMessage = require('../db/controllers/postMessageGivenUserIdAndRoomId');

apiRouter.route('/matches')
  .get((req, res) => { // get matches
    getMatches(req.query.self, req.query.offset)
    .then(matches => {
      res.json(matches);
    })
    .catch(() => {
      res.sendStatus(404);
    });
  });

// ZACH: ideally users/userid/rejections/rejectedUserId
apiRouter.route('/relationships')
  .post((req, res) => { // post to rejects and requests
    console.log(req);
    if (req.body.newType === 'request') {
      return addToRequests(req.body.selfId, req.body.matchId)
        .then(() => {
          res.sendStatus(201);
        })
        .catch(() => {
          res.sendStatus(404);
        });
    }

    if (req.body.newType === 'reject') {
      return addToRejects(req.body.selfId, req.body.matchId)
        .then(() => {
          // ZACH: ideally send back what was removed
          res.sendStatus(201);
        })
        .catch(() => {
          res.sendStatus(404);
        });
    }

    if (req.body.newType === 'conversation') {
      return findOrCreateRoom(req.body.selfId, req.body.connectionId)
        .then((data) => {
          res.status(201).send(data);
        })
        .catch(() => {
          res.sendStatus(404);
        });
    }

    return res.sendStatus(404);
  })



  .put((req, res) => { // change relationship type
    if (req.body.oldType === 'connection') {
      return changeToRejectFromConnection(req.body.selfId, req.body.connectionId)
        .then(() => {
          res.sendStatus(200);
        })
        .catch(() => {
          res.sendStatus(404);
        });
    }
    if (req.body.oldType === 'request') {
      if (req.body.newType === 'connection') {
        return changeToConnectionFromRequest(req.body.selfId, req.body.requestId)
          .then(() => {
            res.sendStatus(200);
          })
          .catch(() => {
            res.sendStatus(404);
          });
      }
      if (req.body.newType === 'reject') {
        return changeToRejectFromRequest(req.body.selfId, req.body.requestId)
          .then(() => {
            res.sendStatus(200);
          })
          .catch(() => {
            res.sendStatus(404);
          });
      }
      return res.sendStatus(404);
    }
    return res.sendStatus(404);
  });

apiRouter.route('/profile')
  .put((req, res) => { // update profile
    updateDescription(req.body.id, req.body.description)
    .then(() => (
      updateLanguages('learn', req.body.id, req.body.languages.willLearn)
    ))
    .then(() => (
      updateLanguages('offer', req.body.id, req.body.languages.canTeach)
    ))
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(404);
    });
  });

apiRouter.route('/rooms')
  .get((req, res) => {
    findRoom(req.query.selfId, req.query.otherId)
      .then(rooms => {
        res.json(rooms[0]);
      })
      .catch(() => {
        res.sendStatus(404);
      });
  });

apiRouter.route('/messages')
  .get((req, res) => {
    getMessages(req.query.roomId)
      .then(messages => {
        res.json(messages);
      })
      .catch(() => {
        res.sendStatus(404);
      });
  })
  .post((req, res) => {
    postMessage(req.body.userId, req.body.roomId, req.body.message)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(() => {
        res.sendStatus(404);
      });
  });

module.exports = apiRouter;
