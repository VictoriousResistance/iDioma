const connections = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONNECTION':
      return ([action.connection]).concat(state);
    default:
      return state;
  }
};

export default connections;
