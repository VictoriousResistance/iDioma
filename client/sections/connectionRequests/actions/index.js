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

export const showOnlineNow = (id) => ({
  type: 'SHOW_ONLINE_NOW',
  id,
});
