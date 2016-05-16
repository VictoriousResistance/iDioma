import React from 'react';
import ReactDOM from 'react-dom';

const unmountComponent = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById('invite'));
};

const IncomingVideoCallBanner = ({ invite, handleConversationStarted, sender }) => {
  return (
    <div>
      <div> Incoming call from {sender} </div>
      <button className="action" onClick={() => { invite.accept().then(handleConversationStarted); unmountComponent(); }}> Accept </button>
      <button className="action" onClick={() => { invite.reject(); unmountComponent(); }}> Decline </button>
    </div>
  );
};


export default IncomingVideoCallBanner;
