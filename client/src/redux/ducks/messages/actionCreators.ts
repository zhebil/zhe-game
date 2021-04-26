import { Action } from 'redux';
import { messageItem } from './reducer';

export enum messageActionsType {
  ADD_MESSAGE = 'message/ADD',
  REMOVE_MESSAGE = 'message/REMOVE',
}

export interface addMessageActionInterface extends Action<messageActionsType> {
  type: messageActionsType.ADD_MESSAGE;
  payload: messageItem;
}

export const addNewMessage = (
  payload: messageItem
): addMessageActionInterface => {
  return {
    type: messageActionsType.ADD_MESSAGE,
    payload,
  };
};

export interface removeMessageActionInterface
  extends Action<messageActionsType> {
  type: messageActionsType.REMOVE_MESSAGE;
  payload: number;
}

export const removeMessage = (
  payload: number
): removeMessageActionInterface => {
  return {
    type: messageActionsType.REMOVE_MESSAGE,
    payload,
  };
};
export type messageAction =
  | addMessageActionInterface
  | removeMessageActionInterface;
