import { put, call, takeLatest, select } from 'redux-saga/effects';
import api from '../../../api/api';
import { oneDataItem } from '../../../types';
import { transformData } from '../../../utillity';
import { RootState } from '../../store';
import { gameDataStatus, IFetchedData } from '../../types';
import {
  neverActionsType,
  setNever,
  updateNeverStatus,
} from './actionCreators';

// TODO: 1. Отрефакторить логику получения данных.
//       2. Убрать повторение кода

export function* fetchGameData() {
  const pathData: string = yield select(
    (state: RootState) => state.presets.current.never
  );

  try {
    yield put(updateNeverStatus(gameDataStatus.LOADNIG));
    const never: IFetchedData = yield call(() => api.getDataByType(pathData));
    const transformedNever = transformData(never.data);
    yield put(setNever(transformedNever));
  } catch (e) {
    yield put(updateNeverStatus(gameDataStatus.ERROR));
  }
}

export function* neverSaga() {
  yield takeLatest(neverActionsType.FETCH, fetchGameData);
}
