import React from 'react';

const Message = ({ sender, message }) => (
  <div className="message-list-item">
    <span className="message-author-name">
      {`${sender}: `}
    </span>
    <span className="message-text">
      {message.body}
    </span>
  </div>
);

export default Message;

// TODO: add message time??