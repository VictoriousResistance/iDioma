import React from 'react';

const Input = ({ inputText, handleTextInput }) => (
  <div>
    <input type="text" value={inputText.value} onChange={handleTextInput} />
  </div>
);

export default Input;