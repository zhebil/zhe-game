import { Action } from 'redux';
import { ID } from '../../../types';

export enum gameDataCRUDActionsType {
  UPDATE = 'gameDataCRUD/UPDATE',
  DELETE = 'gameDataCRUD/DELETE',
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

export type gameDataCRUDAction =
  | UpdateGameDataItemInterface
  | DeleteGameDataItemInterface;
