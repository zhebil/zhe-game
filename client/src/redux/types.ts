import { oneDataItem } from '../types';
import { NeverAction } from './ducks/never/actionCreators';
import { TruthOrDareAction } from './ducks/truth-or-dare/actionCreators';
import { QuestionsAction } from './ducks/questions/actionCreators';
import { RootState } from './store';
import { PresetsAction } from './ducks/presets/actionCreators';
import { gameDataCRUDAction } from './ducks/gameDataItemsCRUD/actionCreators';
import { AllDataAction } from './ducks/allDataList/actionCreators';
import { PokerAction } from './ducks/poker/actionCreators';
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
  | QuestionsAction
  | PresetsAction
  | gameDataCRUDAction
  | AllDataAction
  | PokerAction;

export interface IFetchedData {
  data: oneDataItem[];
  skip: number;
  total: number;
}
export type dataSelectorFucntion = (state: RootState) => oneDataItem[];
export type statusSelectorFucntion = (state: RootState) => gameDataStatus;
