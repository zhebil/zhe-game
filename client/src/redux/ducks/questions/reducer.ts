import { gameDataState } from '../../types';
import { updateData } from '../../functions';
import { gameDataStatus } from '../../types';
import { QuestionsAction, questionsActionsType } from './actionCreators';

const initialState: gameDataState = {
  all: [],
  rest: [],
  done: [],
  status: gameDataStatus.NEVER,
};

export const questions = (
  state = initialState,
  action: QuestionsAction
): gameDataState => {
  switch (action.type) {
    case questionsActionsType.SET_STATUS:
      return {
        all: [],
        rest: [],
        done: [],
        status: action.payload,
      };

    case questionsActionsType.SET_DATA:
      return {
        ...state,
        ...action.payload,
        status: gameDataStatus.LOADED,
      };

    case questionsActionsType.UPDATE:
      return updateData(state, action.payload);

    default:
      return state;
  }
};
