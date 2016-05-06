import React from 'react';
import Language from '../../../components/Language.jsx';


const selectLanguage = (
  <select className="language-selection" defaultValue="english">
    <option value="english">English</option> 
    <option value="spanish">Spanish</option>
    <option value="french">French</option>
  </select>
);

const selectTeachLevel = (
  <select className="level-selection" defaultValue="native">
    <option value="native">Native</option> 
    <option value="fluent">Fluent</option>
  </select>
);

const selectLearnLevel = (
  <select className="level-selection" defaultValue="basic">
    <option value="basic">Basic</option> 
    <option value="intermediate">Intermediate</option>
    <option value="advanced">Advanced</option>
  </select>
);

const labels = (
  <div>
    <div className="language-label">Language</div><div className="level-label">My Level</div>
  </div>
);

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
        {labels}
        {selectLanguage}
        {selectTeachLevel}
      </div>
      <div className="profile-section">
        <div className="profile-title">Languages I want to learn</div>
        <div>
          {profile.willLearn.map((language, i) => (
            <Language key={i} level={language[1]} name={language[0]} />
          ))}
        </div>
        {labels}
        {selectLanguage}
        {selectLearnLevel}
      </div>
      <div className="profile-section">
        <div className="profile-title">About Me</div>
        <div>{profile.description}</div>
      </div>
    </div>

  </div>
);

export default Profile;
