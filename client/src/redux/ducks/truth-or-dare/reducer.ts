import { gameOneDataTypeState } from '../../types';
import { updateData } from '../../functions';
import { gameDataStatus } from '../../types';
import { TruthOrDareAction, truthOrDareActionsType } from './actionCreators';

export interface truthOrDareData {
  truth: gameOneDataTypeState;
  dare: gameOneDataTypeState;
}
export type TruthOrDare = 'truth' | 'dare';

interface truthOrDareState extends truthOrDareData {
  status: gameDataStatus;
}
const initialState: truthOrDareState = {
  truth: {
    all: [],
    rest: [],
    done: [],
  },
  dare: {
    all: [],
    rest: [],
    done: [],
  },
  status: gameDataStatus.NEVER,
};

export const truthOrDare = (
  state: truthOrDareState = initialState,
  action: TruthOrDareAction
): truthOrDareState => {
  switch (action.type) {
    case truthOrDareActionsType.SET_STATUS:
      return {
        truth: {
          all: [],
          rest: [],
          done: [],
        },
        dare: {
          all: [],
          rest: [],
          done: [],
        },
        status: action.payload,
      };

    case truthOrDareActionsType.SET_DATA:
      return {
        ...state,
        dare: action.payload.dare,
        truth: action.payload.truth,
        status: gameDataStatus.LOADED,
      };

    case truthOrDareActionsType.UPDATE_DARE:
      return {
        ...state,
        dare: updateData(state.dare, action.payload),
      };

    case truthOrDareActionsType.UPDATE_TRUTH:
      return {
        ...state,
        truth: updateData(state.truth, action.payload),
      };

    default:
      return state;
  }
};
