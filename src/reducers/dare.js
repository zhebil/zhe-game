const setDare = (newData) => {
  const dare = newData.find((item) => item.name === "dare");
  return dare.data;
};
export const dare = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state.dare,
        all: setDare(action.payload),
        rest: setDare(action.payload),
      };
    default:
      return state.dare;
  }
};
