import { oneDataItem } from '../types';

export enum gameDataStatus {
  LOADNIG = 'LOADING',
  ERROR = 'ERROR',
  LOADED = 'LOADED',
  NEVER = 'NEVER',
}

export interface gameDataState extends gameOneDataTypeState {
  status: gameDataStatus;
}
export interface gameOneDataTypeState {
  all: oneDataItem[];
  rest: oneDataItem[];
  done: oneDataItem[];
}
