const connections = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONNECTION':
      return ([action.connection]).concat(state);

    case 'REMOVE_CONNECTION':
      return state.filter((connection) => {
        return connection.id !== action.id;
      });
      
    default:
      return state;
  }
};

export default connections;
