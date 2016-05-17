const React = require('react');
const ReactDOM = require('react-dom');
const request = require('then-request');

import Video from './components/Video.jsx';
import IncomingVideoCallBanner from './components/IncomingVideoCallBanner.jsx';

import { toggleIsInVideo } from './actions/index.js';

// Check for WebRTC
if (!navigator.webkitGetUserMedia && !navigator.mozGetUserMedia) {
  console.log('WebRTC is not available in your browser.');
}

const twilioSetup = (store, renderApp) => {
  const conversationStarted = (conversation) => {
    store.dispatch(toggleIsInVideo());
    ReactDOM.render(<Video conversation={conversation} handleVideoDisconnectClick={() => { ReactDOM.unmountComponentAtNode(document.getElementById('video')); }} />, document.getElementById('video'));
    conversation.on('disconnected', () => {
      store.dispatch(toggleIsInVideo());
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
        store.dispatch(toggleIsInVideo());
        const sender = invite.from.split('+').slice(1).join(' ');
        ReactDOM.render(<IncomingVideoCallBanner invite={invite} handleConversationStarted={conversationStarted} sender={sender} handleToggleIsInVideo={() => { store.dispatch(toggleIsInVideo()); }} />, document.getElementById('invite'));
        invite.on('canceled', () => {
          ReactDOM.unmountComponentAtNode(document.getElementById('invite'));
          store.dispatch(toggleIsInVideo());
        });
      });
      return renderApp();
    }, error => {
      console.error('Could not connect to Twilio: ' + error.message);
      renderApp();
    });
  });
};

export default twilioSetup;
