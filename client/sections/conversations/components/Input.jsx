import React from 'react';

const Input = () => (
  <div>
    <input id="m" autoComplete="off" className="col-1-1" placeholder="Type here" ref={ node => input = node } />
    <a href="#" className="action" onClick={() => { }}>Video</a>
    <a href="#" className="action" onClick={() => { sendMsg({ from: user.id, body: input.value }) }}>Send</a>
  </div>
);

export default Input;