const connectionRequests = (state = [], action) => {
  switch (action.type) {

    case 'UNMOUNT_REQUEST':
      var newState = [];
      state.forEach((request) => {
        if (request.id === action.id) {
          newState.push(Object.assign(
            {},
            request,
            { willUnmount: true }
          ));
        } else {
          newState.push(request);
        }
      });
      return newState;

    case 'REMOVE_REQUEST':
      var newState = [];
      state.forEach((request) => {
        if (request.id !== action.id) {
          newState.push(request);
        }
      });
      return newState;

    case 'SHOW_ONLINE_NOW': {
      const { id } = action;
      const connectionNum = state.reduce((cum, curr, i) => ((curr.id === id) ? i : cum), null);
      console.log('request', connectionNum);
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

export default connectionRequests;
