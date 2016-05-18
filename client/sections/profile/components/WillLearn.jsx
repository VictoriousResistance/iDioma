import React, { Component } from 'react';
import Language from '../../../components/Language.jsx';
import languageList from '../languageList.js';

export const orderedArrayOfLanguages = (languageListObject) =>
  Object.keys(languageListObject).map((key) => languageListObject[key]);

export const languageDropdown = (languageArray) => {
  return languageArray.map((language) => (
    <option value={language}>{language}</option>
  ));
};


export default class WillLearn extends Component {

  render() {
    const { willLearn, onAddLearnClick, onRemoveLearnClick } = this.props;
    return (
      <div className="profile-section">

        <div className="profile-title">I want to learn</div>

        <div>
          {willLearn.map((language, i) => (
            <div className="profile-language" key={i}>
              <Language level={language[1]} name={language[0]} />
              <button className="x" onClick={() => { onRemoveLearnClick([language[0], language[1]]); }}>x</button>
            </div>
          ))}
        </div>

        <div>
          <div className="language-label">Language</div><div className="level-label">My Level</div>
        </div>

        <select ref="learn" className="language-selection" defaultValue="english">
          {languageDropdown(orderedArrayOfLanguages(languageList))}
        </select>

        <select ref="learn-level" className="level-selection" defaultValue="basic">
          <option value="basic">Basic</option> 
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <button className="add" onClick={() => { onAddLearnClick([this.refs['learn'].value, this.refs['learn-level'].value]); }}>Add</button>

      </div>
    );
  }

};
