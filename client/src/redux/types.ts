import { oneDataItem } from '../types';
import { NeverAction } from './ducks/never/actionCreators';
import { TruthOrDareAction } from './ducks/truth-or-dare/actionCreators';
import { QuestionsAction } from './ducks/questions/actionCreators';
import { RootState } from './store';
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

export type dataSelectorFucntion = (state: RootState) => oneDataItem[];
export type statusSelectorFucntion = (state: RootState) => gameDataStatus;
