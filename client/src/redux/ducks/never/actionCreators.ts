import { Action } from 'redux';
import { ID } from '../../../types';
import { gameDataStatus, gameOneDataTypeState } from '../../types';

export enum neverActionsType {
  SET_DATA = 'never/SET_DATA',
  UPDATE = 'never/UPDATE',
  SET_STATUS = 'never/SET_STATUS',
  FETCH = 'never/FETCH_NEVER',
}

export interface SetNeverActionInterface extends Action<neverActionsType> {
  type: neverActionsType.SET_DATA;
  payload: gameOneDataTypeState;
}
export interface UpdateNeverActionInterface extends Action<neverActionsType> {
  type: neverActionsType.UPDATE;
  payload: ID;
}
export interface SetNeverStatusInterface extends Action<neverActionsType> {
  type: neverActionsType.SET_STATUS;
  payload: gameDataStatus;
}
export interface FetchNeverInterface extends Action<neverActionsType> {
  type: neverActionsType.FETCH;
}

export const setNever = (
  payload: gameOneDataTypeState
): SetNeverActionInterface => {
  return {
    type: neverActionsType.SET_DATA,
    payload,
  };
};
export const updateNever = (payload: ID): UpdateNeverActionInterface => {
  return {
    type: neverActionsType.UPDATE,
    payload,
  };
};
export const updateNeverStatus = (
  payload: gameDataStatus
): SetNeverStatusInterface => {
  return {
    type: neverActionsType.SET_STATUS,
    payload,
  };
};
export const fetchNever = (): FetchNeverInterface => {
  return {
    type: neverActionsType.FETCH,
  };
};

export type NeverAction =
  | SetNeverActionInterface
  | UpdateNeverActionInterface
  | SetNeverStatusInterface
  | FetchNeverInterface;
