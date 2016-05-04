import React from 'react';
import Language from './Language.jsx';

const Profile = ({ profile }) => (
  <div className="profile">
    <div className="profile-name">{profile.firstName + ' ' + profile.lastName + "'s Profile"}</div>

    <div className="profile-section">
      <div className="profile-header">Languages I can offer</div>
      <div>
        {profile.canTeach.map((language, i) => (
          <Language key={i} level={language[1]} name={language[0]} />
        ))}
      </div>
    </div>

    <div className="profile-section">
      <div className="profile-header">Languages I want to learn</div>
      <div>
        {profile.willLearn.map((language, i) => (
          <Language key={i} level={language[1]} name={language[0]} />
        ))}
      </div>
    </div>

    <div className="profile-section">
      <div className="profile-header">About Me</div>
      <div>{profile.description}</div>
    </div>

  </div>
);

export default Profile;
