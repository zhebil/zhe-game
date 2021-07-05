import { call, put } from '@redux-saga/core/effects';
import api from '../../../../api/api';
import { logError, logSuccess } from '../../../../utillity';
import { gameDataStatus } from '../../../types';
import { setPresets, updatePresetsStatus } from '../actionCreators';
import { presetInterface } from '../reducer';

export interface PresetsFetchedData {
  message: string;
  presets: presetInterface[];
}
export function* fetchPresets() {
  try {
    yield put(updatePresetsStatus(gameDataStatus.LOADNIG));
    const data: PresetsFetchedData = yield call(() => api.getPresets());
    yield put(setPresets(data.presets));
  } catch (e) {
    yield put(updatePresetsStatus(gameDataStatus.ERROR));
    yield put(logError(e.message));
  }
}
