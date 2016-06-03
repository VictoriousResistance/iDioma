import React from 'react';
import Message from './Message.jsx';

const Messages = ({ usersKey, messages }) => (  
    <div className="chat-history">
      <ul>
        {messages.map((message, i) => (
          <Message key={i} message={message} sender={usersKey[message.senderId].firstName} />
        ))}
      </ul>
      
    </div>
);

export default Messages;

// TODO Add heading for conversation participants?