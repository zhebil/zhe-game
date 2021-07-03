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

interface CRUDdataItem {
  path: string;

  id: ID;
}

interface editedDataItem extends CRUDdataItem {
  newText: string;
}

export interface DeleteGameDataItemInterface
  extends Action<gameDataCRUDActionsType> {
  type: gameDataCRUDActionsType.DELETE;
  payload: CRUDdataItem;
}

export const deleteGameDataItem = (
  payload: CRUDdataItem
): DeleteGameDataItemInterface => {
  return {
    type: gameDataCRUDActionsType.DELETE,
    payload,
  };
};

export type gameDataCRUDAction =
  | UpdateGameDataItemInterface
  | DeleteGameDataItemInterface;
