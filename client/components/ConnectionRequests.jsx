import React from 'react';

const ConnectionRequest = ({ connectionRequest }) => (
  <div className="person">
    <div>{connectionRequest.firstName + ' ' + connectionRequest.lastName}</div>
    <div>{connectionRequest.canTeach}</div>
    <div>{connectionRequest.willLearn}</div>
    <div>{connectionRequest.description}</div>
    <a href="#" className="action">Accept</a>
    <a href="#" className="action">Decline</a>
  </div>
);

const ConnectionRequests = ({ connectionRequests }) => (
  <div>
    {connectionRequests.map((connectionRequest) => (
      <ConnectionRequest key={connectionRequest.id} connectionRequest={connectionRequest} />
    ))}
  </div>
);

export default ConnectionRequests;
