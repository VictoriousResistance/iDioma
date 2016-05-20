import React from 'react';

// should disable when no rooms
const Input = ({ inputText, handleTextInput, clickHandler }) => (
  <input
    className="message-composer"
    type="text"
    value={inputText.value}
    onChange={handleTextInput}
    onKeyDown={(e) => (e.keyCode === 13) && clickHandler()}
  />
);

export default Input;
