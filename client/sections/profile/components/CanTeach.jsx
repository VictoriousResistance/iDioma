import React, { Component } from 'react';
import Language from '../../../components/Language.jsx';

class CanTeach extends Component {

  render() {
    const { canTeach, onAddTeachClick } = this.props;
    return (
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

        <select ref="teach" className="language-selection" defaultValue="english">
          <option value="English">English</option> 
          <option value="English">Spanish</option>
          <option value="English">French</option>
        </select>

        <select ref="teach-level" className="level-selection" defaultValue="native">
          <option value="native">Native</option> 
          <option value="fluent">Fluent</option>
        </select>

        <button onClick={() => { onAddTeachClick([this.refs['teach'].value, this.refs['teach-level'].value]); }}>Add</button>

      </div>
    );
  }
}

export default CanTeach;
