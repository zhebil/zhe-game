const onDeletePlayer = (items, itemId) => {
  const itemIdx = items.findIndex(({ id }) => itemId === id);
  return [...items.slice(0, itemIdx), ...items.slice(itemIdx + 1)];
};
export const players = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [...state.players, action.payload];
    case 'DELETE_PLAYER':
      return onDeletePlayer(state.players, action.payload);
    default:
      return state.players;
  }
};
