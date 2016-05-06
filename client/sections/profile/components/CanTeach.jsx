import React from 'react';
import Language from '../../../components/Language.jsx';

const CanTeach = ({ canTeach }) => (
  <div className="profile-section">

    <div className="profile-title">Languages I can offer</div>

    <div>
      {canTeach.map((language, i) => (
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

    <select className="level-selection" defaultValue="native">
      <option value="native">Native</option> 
      <option value="fluent">Fluent</option>
    </select>

    <button>Add</button>

  </div>
);

export default CanTeach;