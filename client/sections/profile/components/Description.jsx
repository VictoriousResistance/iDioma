import React from 'react';

const Description = ({ description }) => (
  <div className="profile-section">
    <div className="profile-title">About Me</div>
    <div>{description}</div>
  </div>
);

export default Description;