import React from 'react';
import Rooms from './Rooms.jsx';
import Messages from './Messages.jsx';

let input;

const Conversations = ({ user, rooms, messages, sendMsg }) => (
  <div>
    <div className="col-1-3" >
      <Rooms rooms={rooms} />
    </div>
    <div className="col-2-3" >
      <div>
        <Messages messages={messages} />
      </div>
      <div>
        <input id="m" autoComplete="off" className="col-1-1" placeholder="Type here" ref={ node => input = node } />
        <a href="#" className="action" onClick={() => { }}>Video</a>
        <a href="#" className="action" onClick={() => { 
          sendMsg({ from: user.id, body: input.value });
        }}>Send</a>
      </div>
    </div>
  </div>
);

export default Conversations;
