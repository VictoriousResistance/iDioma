import React from 'react';

const VideoRequestButton = ({ handleVideoRequestClick, otherId }) => {
  
  return (
    <button className="action" onClick={() => { handleVideoRequestClick(otherId); }} >
      Video Call
    </button>
  );
};

export default VideoRequestButton;
