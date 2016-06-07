import React from 'react';

const VideoRequestButton = ({ handleVideoRequestClick, otherId, isWaiting, invite }) => {
  if (isWaiting) {
    return (
      <div>
        <button className="action end-call" onClick={() => { invite.cancel(); }}>Cancel Call</button>
        <audio autoPlay loop src="/assets/waiting.mp3"></audio>
      </div>
    );
  }
  return (
    <button className="action start-call" onClick={() => { handleVideoRequestClick(otherId); }} >
      Video Call
    </button>
  );
};

export default VideoRequestButton;
