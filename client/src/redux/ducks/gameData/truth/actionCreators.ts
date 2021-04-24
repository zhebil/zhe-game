import { Action } from 'redux';
import { ID, oneDataItem } from '../../../../types';
import { gameDataStatus } from '../../../types';

export enum truthActionsType {
  SET_DATA = 'truth/SET_DATA',
  UPDATE = 'truth/UPDATE',
  SET_STATUS = 'truth/SET_STATUS',
}

export interface SetTruthActionInterface extends Action<truthActionsType> {
  type: truthActionsType.SET_DATA;
  payload: oneDataItem[];
}
export interface UpdateTruthActionInterface extends Action<truthActionsType> {
  type: truthActionsType.UPDATE;
  payload: ID;
}
export interface SetTruthStatusInterface extends Action<truthActionsType> {
  type: truthActionsType.SET_STATUS;
  payload: gameDataStatus;
}

export const setTruth = (payload: oneDataItem[]): SetTruthActionInterface => {
  return {
    type: truthActionsType.SET_DATA,
    payload,
  };
};
export const updateTruth = (payload: ID): UpdateTruthActionInterface => {
  return {
    type: truthActionsType.UPDATE,
    payload,
  };
};
export const updateTruthStatus = (
  payload: gameDataStatus
): SetTruthStatusInterface => {
  return {
    type: truthActionsType.SET_STATUS,
    payload,
  };
};

export enum fetchGameDataType {
  FETCH_GAME_DATA = 'FETCH_GAME_DATA',
}

export interface FetchGameDataActionInterface
  extends Action<fetchGameDataType> {
  type: fetchGameDataType.FETCH_GAME_DATA;
}

export const fetchData = (): FetchGameDataActionInterface => {
  return {
    type: fetchGameDataType.FETCH_GAME_DATA,
  };
};

export type TruthAction =
  | SetTruthActionInterface
  | UpdateTruthActionInterface
  | SetTruthStatusInterface
  | FetchGameDataActionInterface;
