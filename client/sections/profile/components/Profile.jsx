import React from 'react';
import Language from '../../../components/Language.jsx';


const selectLanguage = (
  <select defaultValue="english" style={{width: '200px', padding: '6px', border: '2px #cccccc solid',
    'borderRadius': '10px'}}>
    <option value="english">English</option> 
    <option value="spanish">Spanish</option>
    <option value="french">French</option>
  </select>
);

const selectTeachLevel = (
  <select defaultValue="native" style={{width: '90px', padding: '6px', border: '2px #cccccc solid',
    'borderRadius': '10px'}}>
    <option value="native">Native</option> 
    <option value="fluent">Fluent</option>
  </select>
);

const selectLearnLevel = (
  <select defaultValue="basic" style={{width: '90px', padding: '6px', border: '2px #cccccc solid',
    'borderRadius': '10px'}}>
    <option value="basic">Basic</option> 
    <option value="intermediate">Intermediate</option>
    <option value="advanced">Advanced</option>
  </select>
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
