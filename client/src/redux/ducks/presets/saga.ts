import { put, call, takeLatest } from 'redux-saga/effects';
import api from '../../../api/api';
import { createMessage } from '../../../utillity';
import { gameDataStatus } from '../../types';
import { addNewMessage } from '../messages/actionCreators';
import { messageType } from '../messages/reducer';
import {
  setPresets,
  presetsActionsType,
  updatePresetsStatus,
} from './actionCreators';

export interface PresetsFetchedData {
  message: string;
  presets: any[];
}
export function* fetchPresets() {
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

export function* presetsSaga() {
  yield takeLatest(presetsActionsType.GET_PRESETS, fetchPresets);
}
