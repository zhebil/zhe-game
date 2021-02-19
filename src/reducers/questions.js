import { updateData } from "./functions";

export const questions = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state.truth,
        all: action.payload.truth,
        rest: action.payload.truth,
      };
    case "UPDATE_QUESTIONS":
      return updateData(state.questions, action.payload);
    default:
      return state.questions;
  }
};
