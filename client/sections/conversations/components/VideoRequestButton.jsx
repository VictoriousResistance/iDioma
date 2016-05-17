import React from 'react';

const VideoRequestButton = ({ handleVideoRequestClick, otherId, isWaiting }) => {
  if (isWaiting) {
    return null;
  }
  return (
    <button className="action" onClick={() => { handleVideoRequestClick(otherId); }} >
      Video Call
    </button>
  );
};

export default VideoRequestButton;
