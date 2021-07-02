import { takeLatest } from '@redux-saga/core/effects';
import { gameDataCRUDActionsType } from './actionCreators';
import { updateOneDataItem } from './sagas/updateOnePresetItem.saga';
export function* gameDataCRUDSaga() {
  yield takeLatest(gameDataCRUDActionsType.UPDATE_ITEM, updateOneDataItem);
}
