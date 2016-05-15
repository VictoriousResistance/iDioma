import React from 'react';

const VideoRequestButton = ({ handleVideoRequestClick, otherId }) => (
  <button className="action" onClick={() => { handleVideoRequestClick(otherId); }}>
    Video Call
  </button>
);

export default VideoRequestButton;
