const connectionRequests = (state = [], action) => {
  switch (action.type) {
    case 'ACCEPT_REQUEST':
      const newState = [];
      state.forEach((request) => {
        if (request.id !== action.id) {
          newState.push(request);
        }
      });
      return newState;
    case 'DECLINE_REQUEST':
      return [];
    default:
      return state;
  }
};

export default connectionRequests;
