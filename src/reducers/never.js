import { updateData } from "./functions";

export const never = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state.never,
        all: action.payload.never,
        rest: action.payload.never,
      };
    case "UPDATE_NEVER":
      return updateData(state.never, action.payload);
    default:
      return state.never;
  }
};
