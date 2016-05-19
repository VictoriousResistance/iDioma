const serviceRouter = require('express').Router();
const fbConfig = require('../auth/config.js');
const request = require('then-request');

serviceRouter.route('/notifications')
  .post((req, res) => {
    const selfFB = req.body.selfFB;
    const otherFB = req.body.otherFB;
    const requestURL = `https://graph.facebook.com/${otherFB}/notifications`;
    request('POST', requestURL, {
      qs: {
        access_token: `${fbConfig.ID}|${fbConfig.SECRET}`,
        template: `@[${selfFB}] sent you a pair request on iDioma.`,
        href: 'requests',
      },
    })
    .done(data => {
      if (data.statusCode === 200) {
        return res.sendStatus(201);
      }
      res.sendStatus(404);
    });
  });
