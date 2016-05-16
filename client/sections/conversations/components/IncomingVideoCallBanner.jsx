import React from 'react';

const IncomingVideoCallBanner = ({ invite, handleConversationStarted }) => {
  return (
    <div>
      <div> Incoming call from Someone </div>
      <button className="action" onClick={() => { invite.accept().then(handleConversationStarted); }}> Accept </button>
      <button className="action" onClick={() => { invite.reject(); }}> Decline </button>
    </div>
  );
};

// need to unmount banner on accept or decline


export default IncomingVideoCallBanner;
