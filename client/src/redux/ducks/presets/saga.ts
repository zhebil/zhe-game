import { put, call, takeLatest } from 'redux-saga/effects';
import api from '../../../api/api';
import constants from '../../../constants';
import { createMessage } from '../../../utillity';
import { gameDataStatus } from '../../types';
import { addNewMessage } from '../messages/actionCreators';
import { messageType } from '../messages/reducer';
import { updateNeverStatus } from '../never/actionCreators';
import { updateQuestionsStatus } from '../questions/actionCreators';
import { updateTruthOrDareStatus } from '../truth-or-dare/actionCreators';
import {
  setPresets,
  presetsActionsType,
  updatePresetsStatus,
  UpdateCurrentPresetInterface,
  CreatePresetInterface,
} from './actionCreators';

export interface PresetsFetchedData {
  message: string;
  presets: any[];
}
function* fetchPresets() {
  try {
    yield put(updatePresetsStatus(gameDataStatus.LOADNIG));
    const data: PresetsFetchedData = yield call(() => api.getPresets());
    yield put(setPresets(data.presets));

    yield put(addNewMessage(createMessage(data.message, messageType.SUCCESS)));
  } catch (e) {
    yield put(updatePresetsStatus(gameDataStatus.ERROR));

    yield put(addNewMessage(createMessage(e.message, messageType.DANGER)));
  }
}

function* updateCurrentPreset({ currentName }: UpdateCurrentPresetInterface) {
  yield put(updateNeverStatus(gameDataStatus.NEVER));

  yield put(updateQuestionsStatus(gameDataStatus.NEVER));

  yield put(updateTruthOrDareStatus(gameDataStatus.NEVER));
  yield put(
    addNewMessage(
      createMessage(`Пресет ${currentName} успешно выбран`, messageType.SUCCESS)
    )
  );
}

function* createPreset({
  payload: newPresetName,
  history,
}: CreatePresetInterface) {
  try {
    yield put(
      addNewMessage(
        createMessage(
          `Создаем новый пресет - ${newPresetName}`,
          messageType.SUCCESS
        )
      )
    );

    const newPresetResponse: { data: any; message: string } | undefined =
      yield call(() => api.createPreset(newPresetName));

    if (!newPresetResponse) {
      throw new Error(`Не удалось создать пресет ${newPresetName}`);
    }
    yield put(setPresets([]));
    history.push(constants.ROUTES.PRESETS);
  } catch (e) {
    yield put(addNewMessage(createMessage(e.message, messageType.DANGER)));
  }
}

export function* presetsSaga() {
  yield takeLatest(presetsActionsType.GET_PRESETS, fetchPresets);
  yield takeLatest(presetsActionsType.UPDATE_CURRENT, updateCurrentPreset);
  yield takeLatest(presetsActionsType.CREATE, createPreset);
}
