import React from 'react';
import Language from '../../../components/Language.jsx';

const ConnectionRequest = ({ connectionRequest, onAcceptClick, onDeclineClick, selfId }) => (
  <div className={connectionRequest.willUnmount ? "animated fadeOut person" : "person"}>

    <div className="profile-picture-container">
      <img className="profile-picture" src={connectionRequest.photoUrl}/>
    </div>

    <div className="text-container">
      <div className="person-name">{connectionRequest.firstName + ' ' + connectionRequest.lastName}</div>
      <div className="person-description">{connectionRequest.description}</div>
      <div>
        <span>{'Can offer: '}</span>
        <div className="languages">
            {connectionRequest.languages.canTeach.map((language, i) => (<Language key={i} level={language[1]} name={language[0]} />))}
        </div>
      </div>
      <div>
        <span>{'Wants to learn: '}</span>
        <div className="languages">
            {connectionRequest.languages.willLearn.map((language, i) => (<Language key={i} level={language[1]} name={language[0]} />))}
        </div>
      </div>
      <div className="button-container">
        <button className="action" onClick={() => { onAcceptClick(selfId, connectionRequest); }}>Accept</button>
          <div>{connectionRequest.onlineNow ? 'Online Now!' : ''}</div>
        <button className="action negative-action" onClick={() => { onDeclineClick(selfId, connectionRequest.id); }}>Decline</button>
      </div>
    </div>


  </div>
);

const ConnectionRequests = ({ connectionRequests, onAcceptClick, onDeclineClick, selfId }) => {
  if (connectionRequests.length === 0) {
    return (
      <div className="empty-tab-message">
        You don't have any incoming pair requests at the moment. Make sure your profile is complete so other language learners can find you!
      </div>
    );
  }
  return (
    <div>
      {connectionRequests.map((connectionRequest) => (
        <ConnectionRequest key={connectionRequest.id} connectionRequest={connectionRequest} onAcceptClick={onAcceptClick} onDeclineClick={onDeclineClick} selfId={selfId} />
      ))}
    </div>
  );
};

export default ConnectionRequests;
