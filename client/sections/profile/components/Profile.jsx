import React from 'react';
import Header from '../containers/Header.js';
import CanTeach from '../containers/CanTeach.js';
import WillLearn from '../containers/WillLearn.js';
import Description from '../containers/Description.js';
import Language from '../../../components/Language.jsx';

const Profile = ({ profile }) => (
  <div className="profile">

    <Header />

    <div className="profile-detail">
      <CanTeach />
      <WillLearn />
      <Description />
    </div>

  </div>
);

export default Profile;
