import { Action } from 'redux';
import { IPlayer } from '../../../types';
import { Card } from './reducer';

export enum pokerActionType {
  GET = 'poker/GET',
  CHANGE = 'poker/CHANGE',
  SET = 'poker/SET',
  CHANGE_PLAYER = 'poker/CHANGE_PLAYER',
}

export interface GetPokerActionInterface extends Action<pokerActionType> {
  type: pokerActionType.GET;
}

export interface ChangePlayerActionInterface extends Action<pokerActionType> {
  type: pokerActionType.CHANGE_PLAYER;
  payload: IPlayer;
}

export interface SetPokerActionInterface extends Action<pokerActionType> {
  type: pokerActionType.SET;
  payload: Card[];
}

export interface ChangePokerActionInterface extends Action<pokerActionType> {
  type: pokerActionType.CHANGE;
}

export const getPokerAction = (): GetPokerActionInterface => {
  return {
    type: pokerActionType.GET,
  };
};

export const changePlayerAction = (
  payload: IPlayer
): ChangePlayerActionInterface => {
  return {
    type: pokerActionType.CHANGE_PLAYER,
    payload,
  };
};

export const changePokerAction = (): ChangePokerActionInterface => {
  return {
    type: pokerActionType.CHANGE,
  };
};
export const setPokerAction = (payload: Card[]): SetPokerActionInterface => {
  return {
    type: pokerActionType.SET,
    payload,
  };
};
export type PokerAction =
  | GetPokerActionInterface
  | ChangePokerActionInterface
  | SetPokerActionInterface
  | ChangePlayerActionInterface;
