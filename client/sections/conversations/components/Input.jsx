import React from 'react';

const Input = ({ msgTemplate, inputText, handleTextInput, handleOnSend }) => (
  <input
    type="text"
    value={inputText.value}
    onChange={handleTextInput}
    onKeyDown={(e) => { if (e.keyCode === 13) handleOnSend(Object.assign({}, msgTemplate, { body: inputText.value })); }}
  />
);

export default Input;
