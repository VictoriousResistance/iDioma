import React from 'react';
import { Link } from 'react-router';
import Language from '../../../components/Language.jsx';

const Connection = ({ connection, onRemoveClick, self, rooms, onNewConvo }) => (
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
        <button className="action" onClick={() => onNewConvo(selfId, connection, rooms)}><Link to="/home/conversations">Start Conversation</Link></button>
        <button className="action negative-action" onClick={() => onRemoveClick(selfId, connection.id)}>Unpair</button>
      </div>
    </div>
  </div>
);

const Connections = ({ connections, selfId, rooms, onRemoveClick, onNewConvo }) => {
  if (connections.length === 0) {
    return (
      <div className="empty-tab-message">You haven't paired with other language learners yet. Complete your profile and check out your matches!</div>
    );
  }
  return (
    <div>
      {connections.map((connection) => (
        <Connection key={connection.id} connection={connection} selfId={selfId} onNewConvo={onNewConvo} onRemoveClick={onRemoveClick} rooms={rooms} />
      ))}
    </div>
  );
};

export default Connections;