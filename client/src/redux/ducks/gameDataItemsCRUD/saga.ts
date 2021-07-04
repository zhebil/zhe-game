import { takeLatest } from '@redux-saga/core/effects';
import { gameDataCRUDActionsType } from './actionCreators';
import { createOneDataItem } from './sagas/createDataItem.saga';
import { deleteOneDataItem } from './sagas/deleteOneDataItem.saga';
import { updateOneDataItem } from './sagas/updateOneDataItem.saga';
export function* gameDataCRUDSaga() {
  yield takeLatest(gameDataCRUDActionsType.UPDATE, updateOneDataItem);
  yield takeLatest(gameDataCRUDActionsType.DELETE, deleteOneDataItem);
  yield takeLatest(gameDataCRUDActionsType.CREATE, createOneDataItem);
}
