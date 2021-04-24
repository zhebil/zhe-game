import { put, takeLatest } from 'redux-saga/effects';
import api from '../../../api/api';
import { oneDataItem } from '../../../types';
import {
  fetchGameDataType,
  setTruth,
  updateTruthStatus,
} from './truth/actionCreators';
import { setNever, updateNeverStatus } from './never/actionCreators';
import { setDare, updateDareStatus } from './dare/actionCreators';
import {
  setQuestions,
  updateQuestionsStatus,
} from './questions/actionCreators';
import { gameDataStatus } from '../../types';

// TODO: 1. Отрефакторить логику получения данных.
//       2. Убрать повторение кода

export interface DataForStore {
  truth: oneDataItem[];
  dare: oneDataItem[];
  never: oneDataItem[];
}
export interface IFetchedData {
  data: oneDataItem[];
  skip: number;
  total: number;
}

export function* fetchGameData() {
  try {
    yield put(updateTruthStatus(gameDataStatus.LOADNIG));
    yield put(updateNeverStatus(gameDataStatus.LOADNIG));
    yield put(updateDareStatus(gameDataStatus.LOADNIG));
    yield put(updateQuestionsStatus(gameDataStatus.LOADNIG));

    const dataTypes: string[] = ['truth', 'dare', 'never'];
    let data: Partial<DataForStore> = {};

    for (const item of dataTypes) {
      const dataItemsType: IFetchedData = yield api.getDataByType(item);
      data[item as keyof DataForStore] = dataItemsType.data;
    }
    yield put(setTruth((data as DataForStore).truth));
    yield put(setNever((data as DataForStore).never));
    yield put(setDare((data as DataForStore).dare));
    yield put(setQuestions((data as DataForStore).truth));
  } catch (e) {
    yield put(updateTruthStatus(gameDataStatus.ERROR));
    yield put(updateNeverStatus(gameDataStatus.ERROR));
    yield put(updateDareStatus(gameDataStatus.ERROR));
    yield put(updateQuestionsStatus(gameDataStatus.ERROR));
  }
}

export function* gameDataSaga() {
  yield takeLatest(fetchGameDataType.FETCH_GAME_DATA, fetchGameData);
}
