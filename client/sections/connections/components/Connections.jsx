import React from 'react';
import Language from '../../../components/Language.jsx';

const Connection = ({ connection, onRemoveClick, selfId }) =>
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
              {connection.languages.canTeach.map((language, i) => (<Language key={i} level={language[1]} name={language[0]} />))}
          </div>
        </div>
        <div>
          <span>{'Wants to learn: '}</span>
          <div className="languages">
              {connection.languages.willLearn.map((language, i) => (<Language key={i} level={language[1]} name={language[0]} />))}
          </div>
        </div>
        <div className="button-container">
          <button className="action">Start Conversation</button>
          <button className="action negative-action" onClick={() => { onRemoveClick(selfId, connection.id); }}>Remove</button>
        </div>
      </div>


    </div>
  );
};

const Connections = ({ connections, onRemoveClick, selfId }) => (
  <div>
    {connections.map((connection) => (
      <Connection key={connection.id} connection={connection} onRemoveClick={onRemoveClick} selfId={selfId}/>
    ))}
  </div>
);

export default Connections;