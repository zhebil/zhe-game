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