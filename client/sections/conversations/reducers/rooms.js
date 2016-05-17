const rooms = (state = [], action) => {
  switch (action.type) {
    case 'PUSH_ROOM_TO_TOP': {
      const i = isNaN(parseInt(action.index, 10)) ? 0 : parseInt(action.index, 10);
      // same as: return [state[i]].concat(state.slice(0, i)).concat(state.slice(i + 1));
      console.log(i);
      return [
        state[i],
        ...state.slice(0, i),
        ...state.slice(i + 1),
      ];
    }

    case 'ADD_MESSAGE_TO_ROOM': {
      const { msg, activeRoom } = action;
      const roomNum = activeRoom ? 0 : state.reduce((cum, curr, i) => ((curr.id === msg.roomId) ? i : cum), 'N/A'); // TODO: what if nothing is found?
      const room = state[roomNum];
      const messages = room.messages || [];
      return [
        ...state.slice(0, roomNum),
        Object.assign({}, room, { messages: messages.concat(action.msg) }),
        ...state.slice(roomNum + 1),
      ];
    }

    case 'ADD_NEW_ROOM': {
      const { room, connection } = action;
      return [
        Object.assign({ messages: [], users: [connection] }, room),
        ...state,
      ];
    }

    default:
      return state;
  }
};

export default rooms;
