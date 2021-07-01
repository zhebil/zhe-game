import { put, call, takeLatest } from 'redux-saga/effects';
import api from '../../../api/api';
import constants from '../../../constants';
import { logError, logSuccess, logWarning } from '../../../utillity';
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
} from './actionCreators';
import { presetDataInterface, presetInterface } from './reducer';

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

function* updateCurrentPreset({ currentName }: UpdateCurrentPresetInterface) {
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

    const newPresetResponse:
      | { data: presetDataInterface; message: string }
      | undefined = yield call(() => api.createPreset(newPresetName));

    if (!newPresetResponse) {
      throw new Error(`Не удалось создать пресет ${newPresetName}`);
    }
    yield put(setPresets([]));
    history.push(constants.ROUTES.PRESETS);
  } catch (e) {
    yield put(logError(e.message));
  }
}

function* deletePreset({ payload: id }: DeletePresetInterface) {
  try {
    const deletedPresetResponse: { message: string } | undefined = yield call(
      () => api.deletePreset(id)
    );
    yield put(setPresets([]));
  } catch (e) {
    yield put(logError(e.message));
  }
}

export function* presetsSaga() {
  yield takeLatest(presetsActionsType.GET_PRESETS, fetchPresets);
  yield takeLatest(presetsActionsType.UPDATE_CURRENT, updateCurrentPreset);
  yield takeLatest(presetsActionsType.CREATE, createPreset);
  yield takeLatest(presetsActionsType.DELETE, deletePreset);
}
