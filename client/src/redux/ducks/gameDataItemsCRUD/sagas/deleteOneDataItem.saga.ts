import { call, put } from '@redux-saga/core/effects';
import api from '../../../../api/api';
import { getDataTypeByPath, logError } from '../../../../utillity';
import {
  DeleteGameDataItemInterface,
  updateStoreByDeleteItem,
} from '../actionCreators';

export function* deleteOneDataItem({ payload }: DeleteGameDataItemInterface) {
  try {
    console.log(payload);

    const { path, id } = payload;
    yield call(() => api.deleteData(path, id));
    const dataType = getDataTypeByPath(path);
    yield put(updateStoreByDeleteItem({ id, dataType }));
  } catch (e) {
    yield put(logError(e.message));
  }
}