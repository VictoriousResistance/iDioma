const apiRouter = require('express').Router();

apiRouter.route('/matches')
  .get((req, res) => { // get matches

  });

apiRouter.route('/relationships')
  .post((req, res) => {

  }) // post to rejects and requests
  .put((req, res) => {

  });  // change relationship type

apiRouter.route('/profile/:id')
  .put((req, res) => {

  }); // update profile

module.exports = apiRouter;
