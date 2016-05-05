import React from 'react';
import Message from './Message.jsx';

const Messages = ({ messages }) => (
  <div>
    {messages.map((message, i) => (
      <Message key={i} message={message} />
    ))}
  </div>
);

export default Messages;
