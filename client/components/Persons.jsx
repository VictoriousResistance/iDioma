import React from 'react';
import Person from './Person.jsx';

const Persons = ({ persons }) => (
  <div>
    {persons.map((person) => (
      <Person person={person}/>
    ))}
  </div>
);

export default Persons;
