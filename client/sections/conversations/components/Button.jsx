import React from 'react';

const Button = ({ msgTemplate, inputText, handleOnSend, label, class }) => (
  <button
    className={class}
    onClick={() => { handleOnSend(Object.assign({}, msgTemplate, { body: inputText.value })); }}
  >
    {type}
  </button>
);

export default Button;
