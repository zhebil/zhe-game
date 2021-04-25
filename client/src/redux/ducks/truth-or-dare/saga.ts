import { put, takeLatest } from 'redux-saga/effects';
import api from '../../../api/api';
import { oneDataItem } from '../../../types';
import { transformData } from '../../../utillity';
import { gameDataStatus } from '../../types';
import {
  setTruthOrDare,
  truthOrDareActionsType,
  updateTruthOrDareStatus,
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
    yield put(updateTruthOrDareStatus(gameDataStatus.LOADNIG));
    const dare: IFetchedData = yield api.getDataByType('dare');
    const truth: IFetchedData = yield api.getDataByType('dare');
    const truthOrDare = {
      truth: transformData(truth.data),
      dare: transformData(dare.data),
    };
    yield put(setTruthOrDare(truthOrDare));
  } catch (e) {
    yield put(updateTruthOrDareStatus(gameDataStatus.ERROR));
  }
}

export function* truthOrDareSaga() {
  yield takeLatest(truthOrDareActionsType.FETCH, fetchGameData);
}
