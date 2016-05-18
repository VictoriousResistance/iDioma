const connections = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONNECTION':
      return ([action.connection]).concat(state);

    case 'REMOVE_CONNECTION':
      return state.filter((connection) => {
        return connection.id !== action.id;
      });
      
    case 'SHOW_ONLINE_NOW': {
      const { id } = action;
      const connectionNum = state.reduce((cum, curr, i) => ((curr.id === id) ? i : cum), null);
      return connectionNum === null ?
      state :
      [
        ...state.slice(0, connectionNum),
        Object.assign({}, state[connectionNum], { onlineNow: true }),
        ...state.slice(connectionNum + 1),
      ];
    }
        
    default:
      return state;
  }
};

export default connections;
