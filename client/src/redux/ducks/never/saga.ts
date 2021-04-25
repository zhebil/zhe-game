import { put, takeLatest } from 'redux-saga/effects';
import api from '../../../api/api';
import { oneDataItem } from '../../../types';
import { transformData } from '../../../utillity';
import { gameDataStatus } from '../../types';
import {
  neverActionsType,
  setNever,
  updateNeverStatus,
} from './actionCreators';

// TODO: 1. Отрефакторить логику получения данных.
//       2. Убрать повторение кода

export interface IFetchedData {
  data: oneDataItem[];
  skip: number;
  total: number;
}
export function* fetchGameData() {
  try {
    yield put(updateNeverStatus(gameDataStatus.LOADNIG));
    const never: IFetchedData = yield api.getDataByType('never');
    const transformedNever = transformData(never.data);
    yield put(setNever(transformedNever));
  } catch (e) {
    yield put(updateNeverStatus(gameDataStatus.ERROR));
  }
}

export function* neverSaga() {
  yield takeLatest(neverActionsType.FETCH, fetchGameData);
}
