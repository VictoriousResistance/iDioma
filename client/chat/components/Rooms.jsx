import React from 'react';

const Room = ({ room }) => (
  <div className="room">
    <div>{room.id}</div>
    <div>{room.name}</div>
  </div>
);

const Rooms = ({ rooms }) => (
  <div>
    {rooms.map((room) => (
      <Room key={room.id} room={room} />
    ))}
  </div>
);

export default Rooms;
