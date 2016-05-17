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
        <button className="action" onClick={() => { onConnectClick(self.id, match.id); }}>Send Pair Request</button>
        <button className="action negative-action" onClick={() => { onHideClick(self.id, match.id); }}>Don't Show Again</button>
      </div>
    </div>
    
  </div>
);

const Matches = ({ matches, onConnectClick, onHideClick, offset, onLoadMoreClick, self }) => {
  if (matches.length === 0) {
    if (self.languages.canTeach.length === 0 || self.languages.willLearn.length === 0) {
      return (
        <div className="empty-tab-message">
          <p>We need more information from you to pair you with other language learners. Go to your profile to add:</p>
          <p>1) language(s) you want to learn</p>
          <p>2) language(s) you can offer to teach someone else</p>
          <p>So we can show you some potential pairs!</p>
        </div>
      );
    }
    return <div className="empty-tab-message">You don't have any matches yet. Come back later and check again!</div>;
  }
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
