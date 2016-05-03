import React from 'react';

const Connection = ({ connection }) => (
  <div className="person">
    <div>{connection.firstName + ' ' + connection.lastName}</div>
    <div>{connection.canTeach}</div>
    <div>{connection.willLearn}</div>
    <div>{connection.description}</div>
    <a href="#" className="action">Message</a>
    <a href="#" className="action">Video Chat</a>
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