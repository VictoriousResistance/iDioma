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

    default:
      return state;

  }
};

export default connectionRequests;
