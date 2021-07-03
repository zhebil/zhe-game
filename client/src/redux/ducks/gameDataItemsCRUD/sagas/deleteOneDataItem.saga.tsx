import { call, put } from '@redux-saga/core/effects';
import api from '../../../../api/api';
import { getDataTypeByPath, logError } from '../../../../utillity';
import { updatePresetDataByDeleteItem } from '../../presets/actionCreators';
import { DeleteGameDataItemInterface } from '../actionCreators';

export function* deleteOneDataItem({ payload }: DeleteGameDataItemInterface) {
  try {
    console.log(payload);

    const { path, id } = payload;
    yield call(() => api.deleteData(path, id));
    const dataType = getDataTypeByPath(path);
    yield put(updatePresetDataByDeleteItem({ id, dataType }));
  } catch (e) {
    yield put(logError(e.message));
  }
}
