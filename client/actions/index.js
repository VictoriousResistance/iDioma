export const unmountRequest = (id) => {
  return {
    type: 'UNMOUNT_REQUEST',
    id,
  };
};

export const removeRequest = (id) => {
  return {
    type: 'REMOVE_REQUEST',
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


