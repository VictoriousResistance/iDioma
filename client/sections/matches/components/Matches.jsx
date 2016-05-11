import React from 'react';
import Language from '../../../components/Language.jsx';

const Match = ({ match, onConnectClick, onHideClick }) => (
  <div className={match.willUnmount ? "person animated fadeOut" : "person"}>

    <div className="profile-picture-container">
      <img className="profile-picture" src={match.photoUrl}/>
    </div>

    <div className="text-container">
      <div className="person-name">{match.firstName + ' ' + match.lastName}</div>
      <div className="person-description">{match.description}</div>
      <div>
        <span>{'Can offer: '}</span>
        <div className="languages">
            {match.canTeach.map((language, i) => (<Language key={i} level={language[1]} name={language[0]} />))}
        </div>
      </div>
      <div>
        <span>{'Wants to learn: '}</span>
        <div className="languages">
            {match.willLearn.map((language, i) => (<Language key={i} level={language[1]} name={language[0]} />))}
        </div>
      </div>
      <div className="button-container">
        <a href="#" className="action" onClick={() => { onConnectClick(match.id); }}>Connect</a>
        <a href="#" className="action negative-action" onClick={() => { onHideClick(match.id); }}>Hide</a>
      </div>
    </div>
    
  </div>
);

const Matches = ({ matches, onConnectClick, onHideClick, offset, onLoadMoreClick }) => (
  <div>
    {matches.map((match) => (
      <Match key={match.id} match={match} onConnectClick={onConnectClick} onHideClick={onHideClick} />
    ))}
    <button onClick={() => { onLoadMoreClick(offset); }}>Load More</button>
  </div>
);

export default Matches;
