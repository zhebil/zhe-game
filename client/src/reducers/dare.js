import { updateData } from './functions';

export const dare = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state.dare,
        all: action.payload.dare,
        rest: action.payload.dare,
      };
    case 'UPDATE_DARE':
      return updateData(state.dare, action.payload);

    default:
      return state.dare;
  }
};
