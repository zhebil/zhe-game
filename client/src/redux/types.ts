import { oneDataItem } from '../types';
import { NeverAction } from './ducks/never/actionCreators';
import { TruthOrDareAction } from './ducks/truth-or-dare/actionCreators';
import { QuestionsAction } from './ducks/questions/actionCreators';
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

export type reduxAction = () =>
  | NeverAction
  | TruthOrDareAction
  | QuestionsAction;
