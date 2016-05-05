import React from 'react';

const Conversation = ({ conversation }) => (
  <div className="conversation">
    <div>conversation.id</div>
    <div>conversation.roomName</div>
  </div>
);

const Conversations = ({ conversations }) => (
  <div>
    {conversations.map((conversation) => (
      <Conversation key={conversation.id} match={conversation} />
    ))}
  </div>
);

export default Conversations;
