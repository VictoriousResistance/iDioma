import React from 'react';

const Match = ({ match, onConnectClick }) => (
  <div className={match.willUnmount ? "person animated fadeOut" : "person"}>
    <div>{match.firstName + ' ' + match.lastName}</div>
    <div>{match.canTeach}</div>
    <div>{match.willLearn}</div>
    <div>{match.description}</div>
    <a href="#" className="action" onClick={() => { onConnectClick(match.id); }}>Connect</a>
  </div>
);

const Matches = ({ matches, onConnectClick }) => (
  <div>
    {matches.map((match) => (
      <Match key={match.id} match={match} onConnectClick={onConnectClick}/>
    ))}
  </div>
);

export default Matches;
