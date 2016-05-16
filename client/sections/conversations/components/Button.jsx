import React from 'react';

const Button = ({ msgTemplate, inputText, handleOnSend }) => (
  <button
    className="action"
    onClick={() => { handleOnSend(Object.assign({}, msgTemplate, { body: inputText.value })); }}
  >
    Send
  </button>
);

export default Button;
