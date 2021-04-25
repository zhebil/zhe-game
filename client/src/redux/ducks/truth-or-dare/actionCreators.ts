import { Action } from 'redux';
import { ID } from '../../../types';
import { gameDataStatus } from '../../types';
import { truthOrDareData } from './reducer';

export enum truthOrDareActionsType {
  SET_DATA = 'truth-or-dare/SET_DATA',
  UPDATE_DARE = 'truth-or-dare/UPDATE_DARE',
  UPDATE_TRUTH = 'truth-or-dare/UPDATE_TRUTH',
  SET_STATUS = 'truth-or-dare/SET_STATUS',
  FETCH = 'truth-or-dare/FETCH_GAME_DATA',
}

export interface SetTruthOrDareActionInterface
  extends Action<truthOrDareActionsType> {
  type: truthOrDareActionsType.SET_DATA;
  payload: truthOrDareData;
}
export interface UpdateTruthOrDareActionInterface
  extends Action<truthOrDareActionsType> {
  type:
    | truthOrDareActionsType.UPDATE_TRUTH
    | truthOrDareActionsType.UPDATE_DARE;
  payload: ID;
}

export interface SetTruthOrDareStatusInterface
  extends Action<truthOrDareActionsType> {
  type: truthOrDareActionsType.SET_STATUS;
  payload: gameDataStatus;
}

export interface FetchTruthOrDareActionInterface
  extends Action<truthOrDareActionsType> {
  type: truthOrDareActionsType.FETCH;
}

export const setTruthOrDare = (
  payload: truthOrDareData
): SetTruthOrDareActionInterface => {
  return {
    type: truthOrDareActionsType.SET_DATA,
    payload,
  };
};
export const updateTruth = (payload: ID): UpdateTruthOrDareActionInterface => {
  return {
    type: truthOrDareActionsType.UPDATE_TRUTH,
    payload,
  };
};
export const updateDare = (payload: ID): UpdateTruthOrDareActionInterface => {
  return {
    type: truthOrDareActionsType.UPDATE_DARE,
    payload,
  };
};
export const updateTruthOrDareStatus = (
  payload: gameDataStatus
): SetTruthOrDareStatusInterface => {
  return {
    type: truthOrDareActionsType.SET_STATUS,
    payload,
  };
};

export const fetchTruthOrDare = (): FetchTruthOrDareActionInterface => {
  return {
    type: truthOrDareActionsType.FETCH,
  };
};

export type TruthOrDareAction =
  | SetTruthOrDareActionInterface
  | UpdateTruthOrDareActionInterface
  | SetTruthOrDareStatusInterface
  | FetchTruthOrDareActionInterface;
