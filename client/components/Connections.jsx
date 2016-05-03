import React from 'react';

const Connection = ({ connection, id }) =>
{
  const chatroomUrl = '/chat/' + id;
  return (
    <div className="person">
      <div>{connection.firstName + ' ' + connection.lastName}</div>
      <div>{connection.canTeach}</div>
      <div>{connection.willLearn}</div>
      <div>{connection.description}</div>
      <a href={chatroomUrl} target="_blank" className="action">Start Conversation</a>
    </div>
  );
};

const Connections = ({ connections }) => (
  <div>
    {connections.map((connection) => (
      <Connection key={connection.id} connection={connection} />
    ))}
  </div>
);

export default Connections;