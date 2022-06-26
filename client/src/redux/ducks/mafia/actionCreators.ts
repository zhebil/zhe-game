import { Action } from 'redux';

export enum mafiaActionType {
  GET = 'mafia/GET',
  SET = 'mafia/SET',
  CHANGE = 'mafia/CHANGE',
  KILL = 'mafia/KILL',
}

export interface GetMafiaActionInterface extends Action<mafiaActionType> {
  type: mafiaActionType.GET;
}

export interface ChangeMafiaActionInterface extends Action<mafiaActionType> {
  type: mafiaActionType.CHANGE;
  count: number;
}

export interface KillActionInterface extends Action<mafiaActionType> {
  type: mafiaActionType.KILL;
  player: number;
}

export interface SetMafiaActionInterface extends Action<mafiaActionType> {
  type: mafiaActionType.SET;
  payload: string[];
}

export const getMafiaAction = (): GetMafiaActionInterface => {
  return {
    type: mafiaActionType.GET,
  };
};

export const changeMafiaAction = (
  count: number
): ChangeMafiaActionInterface => {
  return {
    type: mafiaActionType.CHANGE,
    count,
  };
};
export const killPlayerAction = (player: number): KillActionInterface => {
  return {
    type: mafiaActionType.KILL,
    player,
  };
};

export const setMafiaAction = (payload: string[]): SetMafiaActionInterface => {
  return {
    type: mafiaActionType.SET,
    payload,
  };
};

export type MafiaAction =
  | GetMafiaActionInterface
  | ChangeMafiaActionInterface
  | SetMafiaActionInterface
  | KillActionInterface;
