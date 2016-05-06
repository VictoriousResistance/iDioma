import React from 'react';

const Header = ({ profile }) => (
  <div className="profile-header">
    <div className="profile-picture-container own-profile-picture-container">
      <img className="profile-picture own-profile-picture" src={profile.photoUrl}/>
    </div>
    <div className="profile-name">{profile.firstName + ' ' + profile.lastName + "'s Profile"}</div>
  </div>
);

export default Header;