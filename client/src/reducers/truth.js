import { updateData } from "./functions";

export const truth = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state.truth,
        all: action.payload.truth,
        rest: action.payload.truth,
      };
    case "UPDATE_TRUTH":
      return updateData(state.truth, action.payload);
    default:
      return state.truth;
  }
};
