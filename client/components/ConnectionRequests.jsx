import React from 'react';

const ConnectionRequest = ({ connectionRequest }) => (
  <div>
    <div>{connectionRequest.firstName + ' ' + connectionRequest.lastName}</div>
    <div>{connectionRequest.canTeach}</div>
    <div>{connectionRequest.willLearn}</div>
    <div>{connectionRequest.description}</div>
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
