import React from 'react';

const Message = ({ message }) => (
  <div>
    <div>
      {message.from}
    </div>
    <div>
      {message.body}
    </div>
  </div>
);

export default Message;
