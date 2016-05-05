import React from 'react';

const Message = ({ message }) => (
  <div>
    <span>
      {message.from}:&nbsp;
    </span>
    <span>
      {message.body}
    </span>
  </div>
);

export default Message;
