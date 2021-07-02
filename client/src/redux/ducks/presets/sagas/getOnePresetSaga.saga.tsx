import { call, put } from '@redux-saga/core/effects';
import api from '../../../../api/api';
import { logError, logSuccess, logWarning } from '../../../../utillity';
import { gameDataStatus, IFetchedData } from '../../../types';
import {
  GetOnePresetInterface,
  setUpdatedPreset,
  setUpdatedPresetStatus,
} from '../actionCreators';
import { presetInterface } from '../reducer';

export function* getOnePresetSaga({ payload: name }: GetOnePresetInterface) {
  try {
    yield put(setUpdatedPresetStatus(gameDataStatus.LOADNIG));

    const toUpdatePreset: { message: string; preset: presetInterface } =
      yield call(() => api.getPreset(name));

    yield put(logWarning('Получаем игровые данные текущего пресета'));

    const pathTo = toUpdatePreset.preset.data;

    const { data: never }: IFetchedData = yield call(() =>
      api.getDataByType(pathTo.never)
    );
    const { data: truth }: IFetchedData = yield call(() =>
      api.getDataByType(pathTo.truth)
    );
    const { data: dare }: IFetchedData = yield call(() =>
      api.getDataByType(pathTo.dare)
    );

    const toUpdatePresetData = {
      preset: toUpdatePreset.preset,
      data: { truth, dare, never },
      status: gameDataStatus.LOADED,
    };

    yield put(setUpdatedPreset(toUpdatePresetData));
    yield put(logSuccess('Игровые данные текущего пресета получены'));
  } catch (e) {
    yield put(logError(e.message));

    yield put(setUpdatedPresetStatus(gameDataStatus.ERROR));
  }
}
