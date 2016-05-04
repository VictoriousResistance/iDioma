import React from 'react';
import Language from './Language.jsx';

const Match = ({ match, onConnectClick, onHideClick }) => (
  <div className={match.willUnmount ? "person animated fadeOut" : "person"}>
    <div>{match.firstName + ' ' + match.lastName}</div>
    <div>{match.description}</div>
    <div>
      <span>{'Languages ' + match.firstName + ' can offer: '}</span>
      <div className="languages">
          {match.canTeach.map((language, i) => (<Language key={i} level={language[1]} name={language[0]} />))}
      </div>
    </div>
    <div>
      <span>{'Languages ' + match.firstName + ' wants to learn: '}</span>
      <div className="languages">
          {match.willLearn.map((language, i) => (<Language key={i} level={language[1]} name={language[0]} />))}
      </div>
    </div>
    <a href="#" className="action" onClick={() => { onConnectClick(match.id); }}>Connect</a>
    <a href="#" className="action" onClick={() => { onHideClick(match.id); }}>Hide</a>
  </div>
);

const Matches = ({ matches, onConnectClick, onHideClick }) => (
  <div>
    {matches.map((match) => (
      <Match key={match.id} match={match} onConnectClick={onConnectClick} onHideClick={onHideClick} />
    ))}
  </div>
);

export default Matches;
