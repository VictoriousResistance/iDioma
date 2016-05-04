import React from 'react';

const ConnectionRequest = ({ connectionRequest, onAcceptClick, onDeclineClick }) => (
  <div className={connectionRequest.willUnmount ? "animated fadeOut person" : "person"}>
    <div>{connectionRequest.firstName + ' ' + connectionRequest.lastName}</div>
    <div>{connectionRequest.canTeach}</div>
    <div>{connectionRequest.willLearn}</div>
    <div>{connectionRequest.description}</div>
    <a href="#" className="action" onClick={() => { onAcceptClick(connectionRequest.id); }}>Accept</a>
    <a href="#" className="action" onClick={() => { onDeclineClick(connectionRequest.id); }}>Decline</a>
  </div>
);

const ConnectionRequests = ({ connectionRequests, onAcceptClick, onDeclineClick }) => (
  <div>
    {connectionRequests.map((connectionRequest) => (
      <ConnectionRequest key={connectionRequest.id} connectionRequest={connectionRequest} onAcceptClick={onAcceptClick} onDeclineClick={onDeclineClick}/>
    ))}
  </div>
);

export default ConnectionRequests;
