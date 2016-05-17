import React from 'react';

const VideoRequestButton = ({ handleVideoRequestClick, otherId, isWaiting, invite }) => {
  if (isWaiting) {
    return <button className="action" onClick={() => { invite.cancel(); }}>Cancel Call</button>;
  }
  return (
    <button className="action" onClick={() => { handleVideoRequestClick(otherId); }} >
      Video Call
    </button>
  );
};

export default VideoRequestButton;
