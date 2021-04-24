import { gameDataState } from '../../../../types';
import { updateData } from '../../../functions';
import { gameDataStatus } from '../../../types';
import { TruthAction, truthActionsType } from './actionCreators';

const initialState: gameDataState = {
  all: [],
  rest: [],
  done: [],
  status: gameDataStatus.NEVER,
};

export const truth = (
  state = initialState,
  action: TruthAction
): gameDataState => {
  switch (action.type) {
    case truthActionsType.SET_STATUS:
      return {
        all: [],
        rest: [],
        done: [],
        status: action.payload,
      };

    case truthActionsType.SET_DATA:
      return {
        ...state,
        all: action.payload,
        rest: action.payload,
        status: gameDataStatus.LOADED,
      };

    case truthActionsType.UPDATE:
      return updateData(state, action.payload);

    default:
      return state;
  }
};
