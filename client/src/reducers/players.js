const onDeletePlayer = (items, itemId) => {
  const itemIdx = items.findIndex(({ id }) => itemId === id);
  return [...items.slice(0, itemIdx), ...items.slice(itemIdx + 1)];
};
export const players = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [...state, action.payload];
    case 'DELETE_PLAYER':
      return onDeletePlayer(state, action.payload);
    default:
      return state;
  }
};
