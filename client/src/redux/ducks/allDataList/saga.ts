import { call, put, takeLatest } from '@redux-saga/core/effects';
import api from '../../../api/api';
import { logError, logWarning } from '../../../utillity';
import { gameDataStatus, IFetchedData } from '../../types';
import {
  allDataListActionsType,
  setAllDataStatus,
  setAllDataToStore,
} from './actionCreators';

function* fetchAllData() {
  try {
    yield put(setAllDataStatus(gameDataStatus.LOADNIG));
    yield put(logWarning('Получаем игровые данные'));

    const { data: never }: IFetchedData = yield call(() =>
      api.getDataByType('never')
    );
    const { data: truth }: IFetchedData = yield call(() =>
      api.getDataByType('truth')
    );
    const { data: dare }: IFetchedData = yield call(() =>
      api.getDataByType('dare')
    );

    yield put(setAllDataToStore({ never, truth, dare }));
  } catch (error) {
    yield put(setAllDataStatus(gameDataStatus.ERROR));
    yield put(logError(error.message));
  }
}

export function* allDataSaga() {
  yield takeLatest(allDataListActionsType.FETCH, fetchAllData);
}
