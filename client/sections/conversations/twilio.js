const React = require('react');
const ReactDOM = require('react-dom');
const request = require('then-request');

import Video from './components/Video.jsx';
import IncomingVideoCallBanner from './components/IncomingVideoCallBanner.jsx';

import { toggleVideoConnected } from './actions/index.js';

// Check for WebRTC
if (!navigator.webkitGetUserMedia && !navigator.mozGetUserMedia) {
  console.log('WebRTC is not available in your browser.');
}

const twilioSetup = (store, renderApp) => {
  const conversationStarted = (conversation) => {
    store.dispatch(toggleVideoConnected());
    ReactDOM.render(<Video conversation={conversation} />, document.getElementById('video'));
    conversation.on('disconnected', () => {
      store.dispatch(toggleVideoConnected());
      ReactDOM.unmountComponentAtNode(document.getElementById('video'));
    });
  };

  request('GET', '/token', {
    qs: {
      identity: store.getState().profile.id + '+' + store.getState().profile.firstName + '+' + store.getState().profile.lastName, 
    },
  })
  .done(data => {
    const accessManager = new Twilio.AccessManager(JSON.parse(data.body).token);
    const conversationsClient = new Twilio.Conversations.Client(accessManager);
    conversationsClient.listen().then(() => {
      window.conversationsClient = conversationsClient;

      conversationsClient.on('invite', function (invite) {

        const sender = invite.from.split('+').slice(1).join(' ');
        ReactDOM.render(<IncomingVideoCallBanner invite={invite} handleConversationStarted={conversationStarted} sender={sender}/>, document.getElementById('invite'));
      });
      return renderApp();
    }, (error) => {
      console.log('Could not connect to Twilio: ' + error.message);
      renderApp();
    });
  });
};

export default twilioSetup;
