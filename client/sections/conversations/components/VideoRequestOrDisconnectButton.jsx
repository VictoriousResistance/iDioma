import React from 'react';

const VideoRequestOrDisconnectButton = ({ handleVideoRequestClick, handleVideoDisconnectClick, otherId, isInVideo }) => {
  if (isInVideo) {
    return (
      <button className="action" onClick={() => { handleVideoDisconnectClick(); }}>
        Disconnect
      </button>
    );
  }
  return (
    <button className="action" onClick={() => { handleVideoRequestClick(otherId); }}>
      Video Call
    </button>
  );
};

export default VideoRequestOrDisconnectButton;
