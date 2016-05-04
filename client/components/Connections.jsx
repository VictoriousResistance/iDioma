import React from 'react';
import Language from './Language.jsx';

const Connection = ({ connection }) =>
{
  const chatroomUrl = '/chat/' + connection.id;
  return (
    <div className={connection.willUnmount ? "person animated fadeOut" : "person"}>
      <div>{connection.firstName + ' ' + connection.lastName}</div>
      <div>{connection.description}</div>
      <div>
        <span>{'Languages ' + connection.firstName + ' can offer: '}</span>
        <div className="languages">
            {connection.canTeach.map((language, i) => (<Language key={i} level={language[1]} name={language[0]} />))}
        </div>
      </div>
      <div>
        <span>{'Languages ' + connection.firstName + ' wants to learn: '}</span>
        <div className="languages">
            {connection.willLearn.map((language, i) => (<Language key={i} level={language[1]} name={language[0]} />))}
        </div>
      </div>
      <a href="#" className="action" onClick={() => { onConnectClick(connection.id); }}>Connect</a>
      <a href="#" className="action" onClick={() => { onHideClick(connection.id); }}>Hide</a>
    </div>
  );
};

const Connections = ({ connections }) => (
  <div>
    {connections.map((connection) => (
      <Connection key={connection.id} connection={connection} />
    ))}
  </div>
);

export default Connections;