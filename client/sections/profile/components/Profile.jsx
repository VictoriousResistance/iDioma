import React from 'react';
import Header from '../containers/Header.js';
import WillLearn from '../containers/WillLearn.js';
import CanTeach from '../containers/CanTeach.js';
import Language from '../../../components/Language.jsx';

const Profile = ({ profile }) => (
  <div className="profile">

    <Header />

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
