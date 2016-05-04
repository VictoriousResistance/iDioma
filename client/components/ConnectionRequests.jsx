import React from 'react';
import Language from './Language.jsx';

const ConnectionRequest = ({ connectionRequest, onAcceptClick, onDeclineClick }) => (
  <div className={connectionRequest.willUnmount ? "animated fadeOut person" : "person"}>
    <div>{connectionRequest.firstName + ' ' + connectionRequest.lastName}</div>
    <div>{connectionRequest.description}</div>
    <div>
      <span>{'Can offer: '}</span>
      <div className="languages">
          {connectionRequest.canTeach.map((language, i) => (<Language key={i} level={language[1]} name={language[0]} />))}
      </div>
    </div>
    <div>
      <span>{'Wants to learn: '}</span>
      <div className="languages">
          {connectionRequest.willLearn.map((language, i) => (<Language key={i} level={language[1]} name={language[0]} />))}
      </div>
    </div>
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
