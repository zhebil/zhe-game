export const addPlayer = (player) => {
  return {
    type: "ADD_PLAYER",
    payload: player,
  };
};
export const deleteItem = (id) => {
  return {
    type: "DELETE_PLAYER",
    payload: id,
  };
};
export const setData = (data) => {
  return {
    type: "SET_DATA",
    payload: data,
  };
};
