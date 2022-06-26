import { call, put, select } from '@redux-saga/core/effects';
import api from '../../../../api/api';
import { constants } from '../../../../constants';
import { logError } from '../../../../utillity';
import { RootState } from '../../../store';
import {
  DeletePresetInterface,
  setPresets,
  updateCurrentPreset,
} from '../actionCreators';
import { presetInterface } from '../reducer';

export function* deletePreset({ payload: id }: DeletePresetInterface) {
  try {
    const allPresets: presetInterface[] = yield select(
      (state: RootState) => state.presets.presets
    );
    const currentPresetName: string = yield select(
      (state: RootState) => state.presets.currentName
    );

    yield call(() => api.deletePreset(id));
    yield put(setPresets([]));

    const deletedPreset = allPresets.find((i) => i._id === id);
    if (deletedPreset?.name === currentPresetName) {
      yield put(
        updateCurrentPreset(
          constants.DEFAULT_PRESET.data,
          constants.DEFAULT_PRESET.currentName
        )
      );
    }
  } catch (e) {
    yield put(logError((e as Error).message));
  }
}
