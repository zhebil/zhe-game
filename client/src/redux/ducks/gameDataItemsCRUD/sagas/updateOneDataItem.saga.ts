import { call, put } from '@redux-saga/core/effects';
import api from '../../../../api/api';
import { logError } from '../../../../utillity';
import { UpdateGameDataItemInterface } from '../actionCreators';

export function* updateOneDataItem({ payload }: UpdateGameDataItemInterface) {
  try {
    const { id, newText, path } = payload;
    yield call(() => api.updateData(path, { text: newText }, id));
  } catch (e) {
    yield put(logError(e.message));
  }
}
