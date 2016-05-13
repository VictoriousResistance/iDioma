const apiRouter = require('express').Router();

apiRouter.route('/api/users')
  .get((req, res) => { // get matches

  })

apiRouter.route('/api/relationships')
  .post() // post to rejects and requests
  .put()  // change relationship type

apiRouter.route('/api/profile/:id')
  .put() // update profile