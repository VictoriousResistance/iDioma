import React from 'react';

const VideoRequestButton = ({ handleVideoRequestClick, otherId, isWaiting, invite }) => {
  if (isWaiting) {
    return (
      <div className="is-waiting-container">
        <button className="action end-call" onClick={() => { invite.cancel(); }}>Cancel Call</button>
        <audio autoPlay loop src="/assets/waiting.mp3"></audio>
      </div>
    );
  }
  return (
    <button onClick={() => { handleVideoRequestClick(otherId); }} >
      Video Call
    </button>
  );
};

export default VideoRequestButton;
