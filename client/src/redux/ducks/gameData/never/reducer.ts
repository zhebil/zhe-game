import { gameDataState } from '../../../../types';
import { updateData } from '../../../functions';
import { gameDataStatus } from '../../../types';
import { NeverAction, neverActionsType } from './actionCreators';

const initialState: gameDataState = {
  all: [],
  rest: [],
  done: [],
  status: gameDataStatus.NEVER,
};

export const never = (
  state = initialState,
  action: NeverAction
): gameDataState => {
  switch (action.type) {
    case neverActionsType.SET_STATUS:
      return {
        all: [],
        rest: [],
        done: [],
        status: action.payload,
      };

    case neverActionsType.SET_DATA:
      return {
        ...state,
        all: action.payload,
        rest: action.payload,
        status: gameDataStatus.LOADED,
      };

    case neverActionsType.UPDATE:
      return updateData(state, action.payload);

    default:
      return state;
  }
};
