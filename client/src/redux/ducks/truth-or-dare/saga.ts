import { put, call, takeLatest, select } from 'redux-saga/effects';
import api from '../../../api/api';
import { transformData } from '../../../utillity';
import { RootState } from '../../store';
import { gameDataStatus, IFetchedData } from '../../types';
import {
  setTruthOrDare,
  truthOrDareActionsType,
  updateTruthOrDareStatus,
} from './actionCreators';

// TODO: 1. Отрефакторить логику получения данных.
//       2. Убрать повторение кода

export function* fetchGameData() {
  const pathDataTruth: string = yield select(
    (state: RootState) => state.presets.current.truth
  );
  const pathDataDare: string = yield select(
    (state: RootState) => state.presets.current.dare
  );

  try {
    yield put(updateTruthOrDareStatus(gameDataStatus.LOADNIG));
    const dare: IFetchedData = yield call(() =>
      api.getDataByType(pathDataDare)
    );
    const truth: IFetchedData = yield call(() =>
      api.getDataByType(pathDataTruth)
    );
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
