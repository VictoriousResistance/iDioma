import React from 'react';

const Button = ({ user, inputText, handleOnSend }) => (
  <a href="#" className="action" onClick={() => { handleOnSend({ from: user.id, body: inputText.value }); }}>Send</a>
);

export default Button;