import { put, call, takeLatest, select } from 'redux-saga/effects';
import api from '../../../api/api';
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
    console.log(data);
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

function* createPreset({ payload: newPreset }: CreatePresetInterface) {
  try {
    yield put(
      addNewMessage(
        createMessage(
          `Создаем новый пресет - ${newPreset}`,
          messageType.SUCCESS
        )
      )
    );
    const newPresetResponse: { data: any; message: string } | undefined =
      yield call(() => api.createPreset(newPreset));
    if (!newPresetResponse) {
      throw new Error(`Не удалось создать пресет ${newPreset}`);
    }
    const currentPresets: any[] = yield select(
      (state) => state.presets.presets
    );
    yield put(setPresets([...currentPresets, newPresetResponse.data]));
  } catch (e) {
    console.log(e);
    yield put(addNewMessage(createMessage(e.message, messageType.DANGER)));
  }
}

export function* presetsSaga() {
  yield takeLatest(presetsActionsType.GET_PRESETS, fetchPresets);
  yield takeLatest(presetsActionsType.UPDATE_CURRENT, updateCurrentPreset);
  yield takeLatest(presetsActionsType.CREATE, createPreset);
}
