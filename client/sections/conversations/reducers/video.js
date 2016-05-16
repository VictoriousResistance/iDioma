const video = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_VIDEO_CONNECTED': {
      return Object.assign({}, state, { isInVideo: !state.isInVideo });
    }
    default:
      return state;
  }
};
export default video;
