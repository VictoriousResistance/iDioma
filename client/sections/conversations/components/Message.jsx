import React from 'react';

const Message = ({ message }) => (
  <div className="message-list-item">
    <span className="message-author-name">
      {message.from}:&nbsp;
    </span>
    <span className="message-text">
      {message.body}
    </span>
  </div>
);

export default Message;

// add message time??
