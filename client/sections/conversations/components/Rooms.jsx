import React from 'react';

const Room = ({ room, handleRoomChange, index }) => (
  <a
    href="#"
    onClick={(e) => {
      handleRoomChange(e);
      e.stopPropagation();
    }}
  >
    <div id={index} className="room">
      <div>{room.id}</div>
      <div>{room.name}</div>
    </div>
  </a>
);

const Rooms = ({ rooms, handleRoomChange }) => (
  <div>
    {rooms.map((room, i, roomsState) => (
      <Room index={i} key={room.id} room={room} handleRoomChange={handleRoomChange} />
    ))}
  </div>
);

export default Rooms;
