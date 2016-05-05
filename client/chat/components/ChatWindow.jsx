import React from 'react';
import Conversations from './Conversations.jsx';
import Messages from './Messages.jsx';

const ChatWindow = ({ conversations, messages, sendMsg }) => (
  <div>
    <div className="col-1-3" >
      <Conversations conversations={conversations} />
    </div>
    <div className="col-2-3" >
      <div>
        <Messages messages={messages} />
      </div>
      <div>
        <form action="">
          <input id="m" autoComplete="off" className="col-1-1" />
          <a href="#" className="action" onClick={() => { }}>Video</a>
          <a href="#" className="action" onClick={() => { sendMsg({ from: 'user', body: 'hello' }); }}>Send</a>
        </form>
      </div>
    </div>
  </div>
);

export default ChatWindow;
