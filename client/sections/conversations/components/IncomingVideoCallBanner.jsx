import React from 'react';
import ReactDOM from 'react-dom';

const unmountComponent = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('invite'));
};

const IncomingVideoCallBanner = ({ invite, handleConversationStarted, sender, handleToggleIsInVideo }) => (
  <div className="banner">
    <div>Incoming Video Call from {sender}...</div>
    <audio autoPlay loop src="/assets/ringer.mp3"></audio>
    <button className="action start-call" onClick={() => { invite.accept().then(handleConversationStarted); unmountComponent(); }}>Accept</button>
    <button className="action end-call" onClick={() => { invite.reject(); unmountComponent(); handleToggleIsInVideo(); }}>Decline</button>
  </div>
);

export default IncomingVideoCallBanner;
