import React from 'react';

const Button = ({ msgTemplate, inputText, handleOnSend, label, type }) => (
  <button
    className={type}
    onClick={() => { handleOnSend(Object.assign({}, msgTemplate, { body: inputText.value })); }}
  >
    {label}
  </button>
);

export default Button;
