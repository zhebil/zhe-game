import { Action } from 'redux';
import { ID, oneDataItem } from '../../../../types';
import { gameDataStatus } from '../../../types';

export enum neverActionsType {
  SET_DATA = 'never/SET_DATA',
  UPDATE = 'never/UPDATE',
  SET_STATUS = 'never/SET_STATUS',
}

export interface SetNeverActionInterface extends Action<neverActionsType> {
  type: neverActionsType.SET_DATA;
  payload: oneDataItem[];
}
export interface UpdateNeverActionInterface extends Action<neverActionsType> {
  type: neverActionsType.UPDATE;
  payload: ID;
}
export interface SetNeverStatusInterface extends Action<neverActionsType> {
  type: neverActionsType.SET_STATUS;
  payload: gameDataStatus;
}

export const setNever = (payload: oneDataItem[]): SetNeverActionInterface => {
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

export type NeverAction =
  | SetNeverActionInterface
  | UpdateNeverActionInterface
  | SetNeverStatusInterface;
