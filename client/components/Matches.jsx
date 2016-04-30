import React from 'react';

const Match = ({ match }) => (
  <div>
    <div>{match.firstName + ' ' + match.lastName}</div>
    <div>{match.canTeach}</div>
    <div>{match.willLearn}</div>
    <div>{match.interests}</div>
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
