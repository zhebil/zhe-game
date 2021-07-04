import { Action } from 'redux';
import { ID } from '../../../types';
import { gameDataStatus } from '../../types';
import { toUpdatePresetInterface } from './reducer';

export enum gameDataCRUDActionsType {
  SET_STATUS = 'gameDataCRUD/SET_STATUS',
  SET = 'gameDataCRUD/SET',
  UPDATE = 'gameDataCRUD/UPDATE',
  DELETE = 'gameDataCRUD/DELETE',
  DELETE_FOR_STATE = 'gameDataCRUD/DELETE_FOR_STATE',
  CREATE = 'gameDataCRUD/CREATE',
  ADD_TO_STATE = 'gameDataCRUD/ADD_TO_STATE',
}

export const updateGameDataItem = (
  payload: editedDataItem
): UpdateGameDataItemInterface => {
  return {
    type: gameDataCRUDActionsType.UPDATE,
    payload,
  };
};

export interface UpdateGameDataItemInterface
  extends Action<gameDataCRUDActionsType> {
  type: gameDataCRUDActionsType.UPDATE;
  payload: editedDataItem;
}

interface CRUDDataItem {
  path: string;
  id: ID;
}

interface editedDataItem extends CRUDDataItem {
  newText: string;
}

export interface DeleteGameDataItemInterface
  extends Action<gameDataCRUDActionsType> {
  type: gameDataCRUDActionsType.DELETE;
  payload: CRUDDataItem;
}

export const deleteGameDataItem = (
  payload: CRUDDataItem
): DeleteGameDataItemInterface => {
  return {
    type: gameDataCRUDActionsType.DELETE,
    payload,
  };
};

export interface SetOnePresetDataInterface
  extends Action<gameDataCRUDActionsType> {
  type: gameDataCRUDActionsType.SET;
  payload: toUpdatePresetInterface;
}

export const setDataCRUDToStore = (
  payload: toUpdatePresetInterface
): SetOnePresetDataInterface => {
  return {
    type: gameDataCRUDActionsType.SET,
    payload,
  };
};

export interface SetStatusInterface extends Action<gameDataCRUDActionsType> {
  type: gameDataCRUDActionsType.SET_STATUS;
  payload: gameDataStatus;
}

export const setDataCRUDStatus = (
  payload: gameDataStatus
): SetStatusInterface => {
  return {
    type: gameDataCRUDActionsType.SET_STATUS,
    payload,
  };
};

export interface UpdateStoreByDeleteItem
  extends Action<gameDataCRUDActionsType> {
  type: gameDataCRUDActionsType.DELETE_FOR_STATE;
  payload: CRUDItemPayload;
}

export interface CRUDItemPayload {
  id: ID;
  dataType: someOneDataType;
}

export interface CRUDItemPayload {
  id: ID;
  dataType: someOneDataType;
}

export type someOneDataType = 'truth' | 'dare' | 'never';

export const updateStoreByDeleteItem = (
  payload: CRUDItemPayload
): UpdateStoreByDeleteItem => {
  return {
    type: gameDataCRUDActionsType.DELETE_FOR_STATE,
    payload,
  };
};

export interface AddToStoreNewItem extends Action<gameDataCRUDActionsType> {
  type: gameDataCRUDActionsType.ADD_TO_STATE;
  payload: AddItemPayload;
}
export interface AddItemPayload extends CRUDItemPayload {
  text: string;
}
export const addToStoreNewItem = (
  payload: AddItemPayload
): AddToStoreNewItem => {
  return {
    type: gameDataCRUDActionsType.ADD_TO_STATE,
    payload,
  };
};

export interface CreateNewItem extends Action<gameDataCRUDActionsType> {
  type: gameDataCRUDActionsType.CREATE;
  payload: CreateItemPayload;
}
export interface CreateItemPayload {
  text: string;
  path: string;
}
export const createGameDataItem = (
  payload: CreateItemPayload
): CreateNewItem => {
  return {
    type: gameDataCRUDActionsType.CREATE,
    payload,
  };
};

export type gameDataCRUDAction =
  | UpdateGameDataItemInterface
  | DeleteGameDataItemInterface
  | UpdateStoreByDeleteItem
  | SetOnePresetDataInterface
  | SetStatusInterface
  | AddToStoreNewItem
  | CreateNewItem;
