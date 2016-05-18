export const addConnection = (connection) => ({
  type: 'ADD_CONNECTION',
  connection,
});

export const removeConnection = (id) => ({
  type: 'REMOVE_CONNECTION',
  id,
});

export const showOnlineNow = (id) => ({
  type: 'SHOW_ONLINE_NOW',
  id,
});
