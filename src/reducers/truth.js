const setTruth = (newData) => {
  const truth = newData.find((item) => item.name === "truth");
  return truth.data;
};
export const truth = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state.truth, all: setTruth(action.payload), rest:setTruth(action.payload) };
    default:
      return state.truth;
  }
};
