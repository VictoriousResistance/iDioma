import React from 'react';

const Match = ({ match }) => (
  <div className={match.willUnmount ? "person animated fadeOut" : "person"}>
    <div>{match.firstName + ' ' + match.lastName}</div>
    <div>{match.canTeach}</div>
    <div>{match.willLearn}</div>
    <div>{match.description}</div>
    <a href="#" className="action">Connect</a>
  </div>
);

const Matches = ({ matches }) => (
  <div>
    {matches.map((match) => (
      <Match key={match.id} match={match} />
    ))}
  </div>
);

export default Matches;
