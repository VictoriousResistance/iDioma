import React from 'react';
import Language from '../../../components/Language.jsx';

const Match = ({ match, onConnectClick, onHideClick, self }) => (
  <div className={match.willUnmount ? "person animated fadeOut" : "person"}>

    <div className="profile-picture-container">
      <img className="profile-picture" src={match.photoUrl} />
    </div>

    <div className="text-container">
      <div className="person-name">{match.firstName + ' ' + match.lastName}</div>
      <div className="person-description">{match.description}</div>
      <div>
        <span>{'Can offer: '}</span>
        <div className="languages">
            {match.languages.canTeach.map((language, i) => (<Language key={i} level={language[1]} name={language[0]} />))}
        </div>
      </div>
      <div>
        <span>{'Wants to learn: '}</span>
        <div className="languages">
            {match.languages.willLearn.map((language, i) => (<Language key={i} level={language[1]} name={language[0]} />))}
        </div>
      </div>
      <div className="button-container">
        <button className="action" onClick={() => { onConnectClick(self.id, match.id); }}>Connect</button>
        <button className="action negative-action" onClick={() => { onHideClick(self.id, match.id); }}>Hide</button>
      </div>
    </div>
    
  </div>
);

const Matches = ({ matches, onConnectClick, onHideClick, offset, onLoadMoreClick, self }) => {
  const loadMore = offset > matches.length ? null : (<button href="#" className="load" onClick={() => { onLoadMoreClick(self, offset); }}>Load More</button>); 
  return (
    <div>
      {matches.map((match) => (
        <Match key={match.id} match={match} onConnectClick={onConnectClick} onHideClick={onHideClick} self={self} />
      ))}
      {loadMore}
    </div>
  );
};

export default Matches;
