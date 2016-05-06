import React from 'react';
import Header from '../containers/Header.js';
import CanTeach from '../containers/CanTeach.js';
import WillLearn from '../containers/WillLearn.js';
import Description from '../containers/Description.js';
import Language from '../../../components/Language.jsx';

const Profile = ({ profile, onUpdateClick }) => (
  <div className="profile">

    <Header /> {/*className is "profile-header"*/}

    <div className="profile-detail">
      <CanTeach /> {/*className is "profile-section"*/}
      <WillLearn /> {/*className is "profile-section"*/}
      <Description /> {/*className is "profile-section"*/}
      <button className={profile.needUpdate ? "update need-update" : "update"} onClick={() => { onUpdateClick(profile); }}>Update</button>
    </div>

  </div>
);

export default Profile;
