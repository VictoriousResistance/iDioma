export const acceptRequest = (id) => {
  return {
    type: 'ACCEPT_REQUEST',
    id,
  };
};

export const declineRequest = (id) => {
  return {
    type: 'DECLINE_REQUEST',
    id,
  };
};

export const unmountRequest = (id) => {
  return {
    type: 'UNMOUNT_REQUEST',
    id,
  };
};

export const connectMatch = (id) => {
  return {
    type: 'CONNECT_MATCH',
    id,
  };
};

export const hideMatch = (id) => {
  return {
    type: 'HIDE_MATCH',
    id,
  };
};

export const unmountMatch = (id) => {
  return {
    type: 'UNMOUNT_MATCH',
    id,
  };
};


