import React from 'react';

const ConnectionRequest = ({ connectionRequest, onAcceptClick }) => (
  <div className="person">
    <div>{connectionRequest.firstName + ' ' + connectionRequest.lastName}</div>
    <div>{connectionRequest.canTeach}</div>
    <div>{connectionRequest.willLearn}</div>
    <div>{connectionRequest.description}</div>
    <a href="#" className="action" onClick={() => { onAcceptClick(connectionRequest.id); }}>Accept</a>
    <a href="#" className="action">Decline</a>
  </div>
);

const ConnectionRequests = ({ connectionRequests, onAcceptClick }) => (
  <div>
    {connectionRequests.map((connectionRequest) => (
      <ConnectionRequest key={connectionRequest.id} connectionRequest={connectionRequest} onAcceptClick={onAcceptClick}/>
    ))}
  </div>
);

export default ConnectionRequests;
