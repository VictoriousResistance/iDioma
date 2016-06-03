import React from 'react';
import Message from './Message.jsx';

const Messages = ({ usersKey, messages, selfId }) => (
    <div className="chat-history" id="messages">
      <ul>
        {messages.map((message, i) => (
          <Message key={i} message={message} sender={usersKey[message.senderId]} self={message.senderId === selfId} />
        ))}
      </ul>
      
    </div>
);

export default Messages;

// TODO Add heading for conversation participants?