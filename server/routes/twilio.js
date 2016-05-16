require('dotenv').load();

const AccessToken = require('twilio').AccessToken;
const ConversationsGrant = AccessToken.ConversationsGrant;

/*
Generate an Access Token for a chat application user - it generates a random
username for the client requesting a token, and takes a device ID as a query
parameter.
*/

module.exports = (app) => {
  app.get('/token', (req, res) => {
    const identity = req.query.identity;
    // containing the grant we just created
    const token = new AccessToken(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_API_KEY,
        process.env.TWILIO_API_SECRET
    );

    // Assign the generated identity to the token
    token.identity = identity;

    // grant the access token Twilio Video capabilities
    const grant = new ConversationsGrant();
    grant.configurationProfileSid = process.env.TWILIO_CONFIGURATION_SID;
    token.addGrant(grant);

    // Serialize the token to a JWT string and include it in a JSON response
    res.json({
      token: token.toJwt(),
    });
  });
};
