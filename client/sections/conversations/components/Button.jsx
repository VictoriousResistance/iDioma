import React from 'react';

const Button = ({ clickHandler, label, type }) => (
  <button
    className={type}
    onClick={clickHandler}
  >
    {label}
  </button>
);

export default Button;
