import React from 'react';
import Rooms from './Rooms.jsx';
import Messages from './Messages.jsx';
import Input from './Input.jsx';

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
      <Input />
    </div>
  </div>
);

export default Conversations;
