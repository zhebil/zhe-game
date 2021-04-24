import { Action } from 'redux';
import { ID, IPlayer } from '../../../types';

export interface reduxAction {
  type: string;
  payload?: any;
}

export enum playersActionsType {
  ADD = 'players/ADD',
  DELETE = 'players/DELETE',
  UPDATE = 'players/UPDATE',
}

export interface AddPlayerActionInterface extends Action<playersActionsType> {
  type: playersActionsType.ADD;
  payload: IPlayer;
}
export interface DeletePlayerActionInterface
  extends Action<playersActionsType> {
  type: playersActionsType.DELETE;
  payload: ID;
}
export interface UpdatePlayerActionInterface
  extends Action<playersActionsType> {
  type: playersActionsType.UPDATE;
  payload: IPlayer;
}

export const addPlayer = (payload: IPlayer): AddPlayerActionInterface => {
  return {
    type: playersActionsType.ADD,
    payload,
  };
};
export const deletePlayer = (payload: ID): DeletePlayerActionInterface => {
  return {
    type: playersActionsType.DELETE,
    payload,
  };
};
export const updatePlayer = (payload: IPlayer): UpdatePlayerActionInterface => {
  return {
    type: playersActionsType.UPDATE,
    payload,
  };
};

export type PlayerActionType =
  | AddPlayerActionInterface
  | DeletePlayerActionInterface
  | UpdatePlayerActionInterface;
