import { gameDataState } from '../../../../types';
import { updateData } from '../../../functions';
import { gameDataStatus } from '../../../types';
import { DareAction, dareActionsType } from './actionCreators';

const initialState: gameDataState = {
  all: [],
  rest: [],
  done: [],
  status: gameDataStatus.NEVER,
};

export const dare = (
  state = initialState,
  action: DareAction
): gameDataState => {
  switch (action.type) {
    case dareActionsType.SET_STATUS:
      return {
        all: [],
        rest: [],
        done: [],
        status: action.payload,
      };

    case dareActionsType.SET_DATA:
      return {
        ...state,
        all: action.payload,
        rest: action.payload,
        status: gameDataStatus.LOADED,
      };

    case dareActionsType.UPDATE:
      return updateData(state, action.payload);

    default:
      return state;
  }
};
