import React from 'react';
import Language from '../../components/Language.jsx';

const Profile = ({ profile }) => (
  <div className="profile">

    <div className="profile-header">
      <div className="profile-picture-container own-profile-picture-container">
        <img className="profile-picture own-profile-picture" src={profile.photoUrl}/>
      </div>
      <div className="profile-name">{profile.firstName + ' ' + profile.lastName + "'s Profile"}</div>
    </div>

    <div className="profile-detail">
      <div className="profile-section">
        <div className="profile-title">Languages I can offer</div>
        <div>
          {profile.canTeach.map((language, i) => (
            <Language key={i} level={language[1]} name={language[0]} />
          ))}
        </div>
      </div>
      <div className="profile-section">
        <div className="profile-title">Languages I want to learn</div>
        <div>
          {profile.willLearn.map((language, i) => (
            <Language key={i} level={language[1]} name={language[0]} />
          ))}
        </div>
      </div>
      <div className="profile-section">
        <div className="profile-title">About Me</div>
        <div>{profile.description}</div>
      </div>
    </div>

  </div>
);

export default Profile;
