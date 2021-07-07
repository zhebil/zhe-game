import { put, call, takeLatest, select } from 'redux-saga/effects';
import api from '../../../api/api';
import { tranformDataByAddingToStore } from '../../../utillity';
import { RootState } from '../../store';
import { gameDataStatus, IFetchedData } from '../../types';
import {
  questionsActionsType,
  setQuestions,
  updateQuestionsStatus,
} from './actionCreators';

// TODO: 1. Отрефакторить логику получения данных.
//       2. Убрать повторение кода

export function* fetchGameData() {
  const pathDataName: string = yield select(
    (state: RootState) => state.presets.current.truth
  );
  try {
    yield put(updateQuestionsStatus(gameDataStatus.LOADNIG));
    const questions: IFetchedData = yield call(() =>
      api.getDataByType(pathDataName)
    );
    const transformedQuestions = tranformDataByAddingToStore(questions.data);
    yield put(setQuestions(transformedQuestions));
  } catch (e) {
    yield put(updateQuestionsStatus(gameDataStatus.ERROR));
  }
}

export function* questionsSaga() {
  yield takeLatest(questionsActionsType.FETCH, fetchGameData);
}
