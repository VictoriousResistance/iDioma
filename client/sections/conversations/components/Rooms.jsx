import React from 'react';
import Button from './Button.jsx';
import classNames from 'classnames';

const nameMaker = (users) => {
  const last = users.length - 1;
  return users
  .map(user => `${user.firstName} ${user.lastName}`)
  .reduce((names, currName, i) =>
    names + (i === last ? ' & ' : ', ') + currName
  );
};

const Room = ({ selfId, room, handleRoomChange, roomDeleter, index }) => (
  <li className="clearfix room" onClick={(e) => handleRoomChange(e, index)}>
    <img className="profilePic" src={room.users[0].photoUrl} alt="avatar" />
    <div className="about">
      <div className="name">
        {nameMaker(room.users)}
        <span className='fa fa-times-circle-o removeRoom' onClick={(e) => roomDeleter(e, index, selfId, room.id)}></span>
      </div>
      <div className="status">
        <i className="fa fa-circle offline"></i>
      </div>
    </div>
  </li>
);

// TODO
/* add time last updated?? */
/* display last message text? */

const Rooms = ({ selfId, rooms, handleRoomChange, roomDeleter }) => (
  <div className="people-list" id="people-list">
    <div className="search">
      <input type="text" placeholder="search" />
      <i className="fa fa-search"></i>
    </div>
    <ul className="list">
      {rooms.map((room, i, roomsState) => (
        <Room key={i} index={i} room={room} handleRoomChange={handleRoomChange} roomDeleter={roomDeleter} selfId={selfId} />
      ))}
    </ul>
  </div>
);

export default Rooms;
