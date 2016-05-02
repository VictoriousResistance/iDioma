import React from 'react';

const Connection = ({ connection }) => (
  <div>
    <div>{connection.firstName + ' ' + connection.lastName}</div>
    <div>{connection.canTeach}</div>
    <div>{connection.willLearn}</div>
    <div>{connection.description}</div>
  </div>
);

const Connections = ({ connections }) => (
  <div>
    {connections.map((connection) => (
      <Connection key={connection.id} connection={connection} />
    ))}
  </div>
);

export default Connections;