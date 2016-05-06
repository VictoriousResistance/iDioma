import React from 'react';
import Language from '../../../components/Language.jsx';
import WillLearn from '../containers/WillLearn.js';
import CanTeach from '../containers/CanTeach.js';

const Profile = ({ profile }) => (
  <div className="profile">

    <div className="profile-header">
      <div className="profile-picture-container own-profile-picture-container">
        <img className="profile-picture own-profile-picture" src={profile.photoUrl}/>
      </div>
      <div className="profile-name">{profile.firstName + ' ' + profile.lastName + "'s Profile"}</div>
    </div>

    <div className="profile-detail">
      <CanTeach />
      <WillLearn />
      <div className="profile-section">
        <div className="profile-title">About Me</div>
        <div>{profile.description}</div>
      </div>
    </div>

  </div>
);

export default Profile;
