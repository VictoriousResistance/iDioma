import React from 'react';

const Button = ({ msgTemplate, inputText, handleOnSend }) => (
  <a
    href="#"
    className="action"
    onClick={() => { handleOnSend(Object.assign({}, msgTemplate, { body: inputText.value })); }}
  >
    Send
  </a>
);

export default Button;
