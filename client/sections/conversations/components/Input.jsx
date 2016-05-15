import React from 'react';

// should disable when no rooms
const Input = ({ msgTemplate, inputText, handleTextInput, handleOnSend }) => (
  <input
    className="message-composer"
    type="text"
    value={inputText.value}
    onChange={handleTextInput}
    onKeyDown={(e) => { if (e.keyCode === 13) handleOnSend(Object.assign({}, msgTemplate, { body: inputText.value })); }}
  />
);

export default Input;
