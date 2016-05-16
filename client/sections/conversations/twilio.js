const React = require('react');
const ReactDOM = require('react-dom');
const Video = require('./components/Video.jsx');
const request = require('then-request');
// const Twilio = require('twilio');

import { toggleVideoConnected } from './actions/index.js';


var conversationsClient;
var identity;

// Check for WebRTC
if (!navigator.webkitGetUserMedia && !navigator.mozGetUserMedia) {
  console.log('WebRTC is not available in your browser.');
}




export default (store, renderApp) => {
  console.log('identity', store.getState().profile.id);
  // Conversation is live
  const conversationStarted = (conversation) => {
      store.dispatch(toggleVideoConnected());
      // Draw local video, if not already previewing
      ReactDOM.render(<Video conversation={conversation} />, document.getElementById('video'));
      

      // When the conversation ends, stop capturing local video
      conversation.on('disconnected', function (conversation) {
        store.dispatch(toggleVideoConnected());
          ReactDOM.unmountComponentAtNode(document.getElementById('local-conversation'));
      });
  };

  // Successfully connected!
  const clientConnected = () => {


      conversationsClient.on('invite', function (invite) {
          invite.accept().then(conversationStarted);
      });

      // Bind button to create conversation
      document.getElementById('button-invite').onclick = function () {
                        // Create a conversation
              var options = {};
             
              conversationsClient.inviteToConversation(inviteTo, options).then(conversationStarted, function (error) {
                  console.error('Unable to create conversation', error);
              });
          
      };
  };

  request('GET', '/token', {
    qs: {
      identity: store.getState().profile.id,
    },
  })
  .done(data => {
    identity = JSON.parse(data.body).identity;
    var accessManager = new Twilio.AccessManager(JSON.parse(data.body).token);

    // Check the browser console to see your generated identity. 
    // Send an invite to yourself if you want! 
    console.log(identity);

    // Create a Conversations Client and connect to Twilio
    console.log('Twilio', Twilio);
    conversationsClient = new Twilio.Conversations.Client(accessManager);
    conversationsClient.listen().then(() => {
      return renderApp();
    }, function (error) {
      console.log('Could not connect to Twilio: ' + error.message);
    });
  });

};

// module.exports.conversationStarted = conversationStarted;
// module.exports.clientConnected = clientConnected;
