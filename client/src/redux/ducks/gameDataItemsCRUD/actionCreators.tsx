import { Action } from 'redux';
import { ID } from '../../../types';

export enum gameDataCRUDActionsType {
  UPDATE_ITEM = 'gameDataCRUD/UPDATE',
}

export const updateGameDataItem = (
  payload: editedDataItem
): UpdateGameDataItemInterface => {
  return {
    type: gameDataCRUDActionsType.UPDATE_ITEM,
    payload,
  };
};

export interface UpdateGameDataItemInterface
  extends Action<gameDataCRUDActionsType> {
  type: gameDataCRUDActionsType.UPDATE_ITEM;
  payload: editedDataItem;
}

interface editedDataItem {
  path: string;
  newText: string;
  id: ID;
}

export type gameDataCRUDAction = UpdateGameDataItemInterface;
