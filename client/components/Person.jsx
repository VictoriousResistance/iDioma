import React from 'react';

const Person = ({ person }) => (
  <div>
    <div>{person.firstName + ' ' + person.lastName}</div>
    <div>{person.canTeach}</div>
    <div>{person.willLearn}</div>
    <div>{person.interests}</div>
  </div>
);

export default Person;
