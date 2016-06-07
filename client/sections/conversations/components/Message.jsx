import React from 'react';

const Message = ({ sender, message, self }) => (
  <li className="clearfix">
    <div className={'message-data' + (self ? ' align-right' : '')}>
      <span className="message-data-name" >{sender.firstName}</span>
      
    </div>
    <div className={'message ' + (self ? 'my' : 'other') + '-message'}>
      {message.body}
    </div>
  </li>
);

export default Message;

// TODO: add message time??

      // <li className="clearfix">
      //   <div className="message-data align-right">
      //     <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
      //     <span className="message-data-name" >NAME</span> <i className="fa fa-circle me"></i>
          
      //   </div>
      //   <div className="message other-message float-right">
      //     MESSAGE
      //   </div>
      // </li>