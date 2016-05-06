import React from 'react';
import Language from '../../../components/Language.jsx';

const labels = (
  <div>
    <div className="language-label">Language</div><div className="level-label">My Level</div>
  </div>
);

const WillLearn = ({ willLearn }) => (
  <div className="profile-section">

    <div className="profile-title">Languages I can offer</div>

    <div>
      {willLearn.map((language, i) => (
        <Language key={i} level={language[1]} name={language[0]} />
      ))}
    </div>

    <div>
      <div className="language-label">Language</div><div className="level-label">My Level</div>
    </div>

    <select className="language-selection" defaultValue="english">
      <option value="english">English</option> 
      <option value="spanish">Spanish</option>
      <option value="french">French</option>
    </select>

    <select className="level-selection" defaultValue="basic">
      <option value="basic">Basic</option> 
      <option value="intermediate">Intermediate</option>
      <option value="advanced">Advanced</option>
    </select>

    <button>Add</button>

  </div>
);

export default WillLearn;