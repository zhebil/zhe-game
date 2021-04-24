import { gameDataStatus } from './redux/types';

export type ID = number | string;
export interface IPlayer {
  id: ID;
  name: string;
}
export interface oneDataItem {
  id: ID;
  text: string;
}

export interface IRaund {
  player: string;
  nextPlayer: number;
  text: string;
}
export interface gameDataState {
  all: oneDataItem[];
  rest: oneDataItem[];
  done: oneDataItem[];
  status: gameDataStatus;
}
