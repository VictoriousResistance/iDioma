import React from 'react';

const Message = ({ sender, message }) => (
  <div className="message-list-item">
    <span className="message-author-name">
      {`${sender}: `}
    </span>
    <span className="message-text">
      {message.body}
    </span>
  </div>
);

export default Message;

// TODO: add message time??

//       <li className="clearfix">
//         <div className="message-data align-right">
//           <span className="message-data-time" >10:10 AM, Today</span> &nbsp; &nbsp;
//           <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>
          
//         </div>
//         <div className="message other-message float-right">
//           Hi Vincent, how are you? How is the project coming along?
//         </div>
//       </li>