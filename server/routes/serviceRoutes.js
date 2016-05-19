const serviceRouter = require('express').Router();
const fbConfig = require('../auth/config.js');
const request = require('then-request');

serviceRouter.route('/notifications')
  .post((req, res) => {
    const selfFB = req.body.selfFB;
    const otherFB = req.body.otherFB;
    const requestURL = `https://graph.facebook.com/${otherFB}/notifications`;
    console.log('selfFB', selfFB);
    console.log('otherFB', otherFB);
    console.log('appID', fbConfig.ID);
    console.log('appSecret', fbConfig.SECRET);
    console.log('requestURL', requestURL);
    request('POST', requestURL, {
      qs: {
        access_token: `${fbConfig.ID}|${fbConfig.SECRET}`,
        href: 'requests',
        template: `@[${selfFB}] sent you a pair request on iDioma.`,
      },
    })
    .done(data => {
      console.log('done data', data);
      if (data.statusCode === 200) {
        return res.sendStatus(201);
      }
      res.sendStatus(404);
    });
  });

module.exports = serviceRouter;
