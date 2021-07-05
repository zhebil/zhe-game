import { Action } from 'redux';
import { gameDataStatus } from '../../types';
import { gamePresetData } from '../gameDataItemsCRUD/reducer';

export enum allDataListActionsType {
  SET_STATUS = 'allData/SET_STATUS',
  SET = 'allData/SET',
  FETCH = 'allData/FETCH',
}

export interface SetAllDataInterface extends Action<allDataListActionsType> {
  type: allDataListActionsType.SET;
  payload: gamePresetData;
}

export const setAllDataToStore = (
  payload: gamePresetData
): SetAllDataInterface => {
  return {
    type: allDataListActionsType.SET,
    payload,
  };
};

export interface FetchAllData extends Action<allDataListActionsType> {
  type: allDataListActionsType.FETCH;
}
export const fetchAllData = (): FetchAllData => {
  return { type: allDataListActionsType.FETCH };
};

export interface SetAllDataStatusInterface
  extends Action<allDataListActionsType> {
  type: allDataListActionsType.SET_STATUS;
  payload: gameDataStatus;
}

export const setAllDataStatus = (
  payload: gameDataStatus
): SetAllDataStatusInterface => {
  return {
    type: allDataListActionsType.SET_STATUS,
    payload,
  };
};

export type AllDataAction =
  | SetAllDataInterface
  | SetAllDataStatusInterface
  | FetchAllData;
