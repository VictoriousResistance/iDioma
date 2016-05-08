import React from 'react';
import Language from '../../../components/Language.jsx';

const Connection = ({ connection, onRemoveClick }) =>
{
  const chatroomUrl = '/chat/' + connection.id;
  return (
    <div className="person">

      <div className="profile-picture-container">
        <img className="profile-picture" src={connection.photoUrl}/>
      </div>

      <div className="text-container">
        <div className="person-name">{connection.firstName + ' ' + connection.lastName}</div>
        <div className="person-description">{connection.description}</div>
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
      </div>

      <div className="button-container">
        <a href={chatroomUrl} target="_blank" className="action">Start Conversation</a>
        <a href="#" className="action negative-action" onClick={() => { onRemoveClick(connection.id); }}>Remove</a>
      </div>

    </div>
  );
};

const Connections = ({ connections, onRemoveClick }) => (
  <div>
    {connections.map((connection) => (
      <Connection key={connection.id} connection={connection} onRemoveClick={onRemoveClick}/>
    ))}
  </div>
);

export default Connections;