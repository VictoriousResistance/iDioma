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
