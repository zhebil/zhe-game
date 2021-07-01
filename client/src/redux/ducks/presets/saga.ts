import { put, call, takeLatest, select } from 'redux-saga/effects';
import api from '../../../api/api';
import constants from '../../../constants';
import { logError, logSuccess, logWarning } from '../../../utillity';
import { RootState } from '../../store';
import { gameDataStatus } from '../../types';
import { updateNeverStatus } from '../never/actionCreators';
import { updateQuestionsStatus } from '../questions/actionCreators';
import { updateTruthOrDareStatus } from '../truth-or-dare/actionCreators';
import {
  setPresets,
  presetsActionsType,
  updatePresetsStatus,
  UpdateCurrentPresetInterface,
  CreatePresetInterface,
  DeletePresetInterface,
  updateCurrentPreset,
} from './actionCreators';
import { presetInterface } from './reducer';

export interface PresetsFetchedData {
  message: string;
  presets: presetInterface[];
}

function* fetchPresets() {
  try {
    yield put(updatePresetsStatus(gameDataStatus.LOADNIG));
    const data: PresetsFetchedData = yield call(() => api.getPresets());
    yield put(setPresets(data.presets));
    yield put(logSuccess(data.message));
  } catch (e) {
    yield put(updatePresetsStatus(gameDataStatus.ERROR));
    yield put(logError(e.message));
  }
}

function* updateDataByNewPreset({ currentName }: UpdateCurrentPresetInterface) {
  yield put(updateNeverStatus(gameDataStatus.NEVER));
  yield put(updateQuestionsStatus(gameDataStatus.NEVER));
  yield put(updateTruthOrDareStatus(gameDataStatus.NEVER));
  yield put(logSuccess(`Пресет ${currentName} успешно выбран`));
}

function* createPreset({
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

function* deletePreset({ payload: id }: DeletePresetInterface) {
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
    yield put(logError(e.message));
  }
}

export function* presetsSaga() {
  yield takeLatest(presetsActionsType.GET_PRESETS, fetchPresets);
  yield takeLatest(presetsActionsType.UPDATE_CURRENT, updateDataByNewPreset);
  yield takeLatest(presetsActionsType.CREATE, createPreset);
  yield takeLatest(presetsActionsType.DELETE, deletePreset);
}
