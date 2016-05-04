import React from 'react';
import Language from './Language.jsx';

const Connection = ({ connection }) =>
{
  const chatroomUrl = '/chat/' + connection.id;
  return (
    <div className="person">
      <div>{connection.firstName + ' ' + connection.lastName}</div>
      <div>{connection.description}</div>
      <div>
        <span>{'Can offer: '}</span>
        <div className="languages">
            {connection.canTeach.map((language, i) => (<Language key={i} level={language[1]} name={language[0]} />))}
        </div>
      </div>
      <div>
        <span>{'Wants to learn: '}</span>
        <div className="languages">
            {connection.willLearn.map((language, i) => (<Language key={i} level={language[1]} name={language[0]} />))}
        </div>
      </div>
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