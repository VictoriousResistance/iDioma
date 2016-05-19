const rooms = (state = [], action) => {
  switch (action.type) {
    case 'PUSH_ROOM_TO_TOP': {
      const i = action.roomIndex;
      // same as: return [state[i]].concat(state.slice(0, i)).concat(state.slice(i + 1));
      return [
        state[i],
        ...state.slice(0, i),
        ...state.slice(i + 1),
      ];
    }

    case 'DELETE_ROOM': {
      const i = action.roomIndex;
      return [
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
      const { room, self, connections } = action;
      const selfKey = {};
      selfKey[self.id] = self;
      const usersKey = connections.reduce((cum, curr) => {
        cum[curr.id] = curr;
        return cum;
      }
      , selfKey);

      return [
        Object.assign({
          messages: [],
          users: connections,
          usersKey,
        }
        , room),
        ...state,
      ];
    }

    case 'UPDATE_ROOM_ONLINE_NOW': {
      const { roomId, numOnline } = action;
      const roomNum = state.reduce((cum, curr, i) => ((curr.id === roomId) ? i : cum), null); // TODO: what if nothing is found?
      return roomNum ?
      [
        ...state.slice(0, roomNum),
        Object.assign({}, state[roomNum], { onlineNow: numOnline }),
        ...state.slice(roomNum + 1),
      ] :
      state;
    }

    default:
      return state;
  }
};

export default rooms;
