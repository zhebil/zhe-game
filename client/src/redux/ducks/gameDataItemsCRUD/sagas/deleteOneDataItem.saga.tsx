import { call, put } from '@redux-saga/core/effects';
import api from '../../../../api/api';
import { logError } from '../../../../utillity';
import { DeleteGameDataItemInterface } from '../actionCreators';

export function* deleteOneDataItem({ payload }: DeleteGameDataItemInterface) {
  try {
    const { path, id } = payload;
    yield call(() => api.deleteData(path, id));
  } catch (e) {
    yield put(logError(e.message));
  }
}
