import React from 'react';
import Conversations from './Conversations.jsx';
import Messages from './Messages.jsx';

const ChatWindow = ({ conversations, messages }) => (
  <div>
    <div className="col-1-4" >
      <Conversations conversations={conversations} />
    </div>
    <div className="col-2-3" >
      <div>
        <Messages messages={messages} />
      </div>
      <div>
        <form action="">
          <input id="m" autoComplete="off" className="col-1-1" /><button>Video</button><button>Send</button>
        </form>
      </div>
    </div>
  </div>
);

export default ChatWindow;
