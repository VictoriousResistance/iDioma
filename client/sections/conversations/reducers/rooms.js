const rooms = (state = [], action) => {
  switch (action.type) {
    case 'PUSH_ROOM_TO_TOP': {
      const i = isNaN(parseInt(action.index, 10)) ? 0 : parseInt(action.index, 10);
      // same as: return [state[i]].concat(state.slice(0, i)).concat(state.slice(i + 1));
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
      return [
        ...state.slice(0, roomNum),
        Object.assign({}, room, { messages: room.messages.concat(action.msg) }),
        ...state.slice(roomNum + 1),
      ];
    }

    default:
      return state;
  }
};

export default rooms;
