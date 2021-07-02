import { takeLatest } from 'redux-saga/effects';
import { presetsActionsType } from './actionCreators';
import { createPreset } from './sagas/createPreset.saga';
import { deletePreset } from './sagas/deletePreset.saga';
import { fetchPresets } from './sagas/fetchPreset.saga';
import { getOnePresetSaga } from './sagas/getOnePresetSaga.saga';
import { updateDataByNewPreset } from './sagas/updateDataByNewPreset.saga';

export function* presetsSaga() {
  yield takeLatest(presetsActionsType.GET_PRESETS, fetchPresets);
  yield takeLatest(presetsActionsType.UPDATE_CURRENT, updateDataByNewPreset);
  yield takeLatest(presetsActionsType.CREATE, createPreset);
  yield takeLatest(presetsActionsType.DELETE, deletePreset);
  yield takeLatest(presetsActionsType.GET_ONE, getOnePresetSaga);
}
