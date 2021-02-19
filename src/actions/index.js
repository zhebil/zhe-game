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
export const updateTruth = (id) => {
  return {
    type: "UPDATE_TRUTH",
    payload: id,
  };
};
export const updateDare = (id) => {
  return {
    type: "UPDATE_DARE",
    payload: id,
  };
};
export const updateNever = (id) => {
  return {
    type: "UPDATE_NEVER",
    payload: id,
  };
};
export const updateQuestions = (id) => {
  return {
    type: "UPDATE_QUESTIONS",
    payload: id,
  };
};
