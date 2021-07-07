import { call, put } from '@redux-saga/core/effects';
import api from '../../../../api/api';
import { constants } from '../../../../constants';
import { logError, logWarning } from '../../../../utillity';
import { CreatePresetInterface, setPresets } from '../actionCreators';

export function* createPreset({
  payload: newPresetName,
  history,
}: CreatePresetInterface) {
  try {
    yield put(logWarning(`Создаем новый пресет - ${newPresetName}`));

    yield call(() => api.createPreset(newPresetName));

    yield put(setPresets([]));
    history.push(constants.ROUTES.PRESETS);
  } catch (e) {
    yield put(logError(e.message));
  }
}
