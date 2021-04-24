import { Action } from 'redux';
import { ID, oneDataItem } from '../../../../types';
import { gameDataStatus } from '../../../types';

export enum dareActionsType {
  SET_DATA = 'dare/SET_DATA',
  UPDATE = 'dare/UPDATE',
  SET_STATUS = 'dare/SET_STATUS',
}

export interface SetDareActionInterface extends Action<dareActionsType> {
  type: dareActionsType.SET_DATA;
  payload: oneDataItem[];
}
export interface UpdateDareActionInterface extends Action<dareActionsType> {
  type: dareActionsType.UPDATE;
  payload: ID;
}
export interface SetDareStatusInterface extends Action<dareActionsType> {
  type: dareActionsType.SET_STATUS;
  payload: gameDataStatus;
}

export const setDare = (payload: oneDataItem[]): SetDareActionInterface => {
  return {
    type: dareActionsType.SET_DATA,
    payload,
  };
};
export const updateDare = (payload: ID): UpdateDareActionInterface => {
  return {
    type: dareActionsType.UPDATE,
    payload,
  };
};
export const updateDareStatus = (
  payload: gameDataStatus
): SetDareStatusInterface => {
  return {
    type: dareActionsType.SET_STATUS,
    payload,
  };
};

export type DareAction =
  | SetDareActionInterface
  | UpdateDareActionInterface
  | SetDareStatusInterface;
