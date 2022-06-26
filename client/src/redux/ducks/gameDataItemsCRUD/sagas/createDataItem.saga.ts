import { call, put } from '@redux-saga/core/effects';
import api from '../../../../api/api';
import { oneDataItem } from '../../../../types';
import { takeDataTypeFromPath, logError } from '../../../../utillity';
import { CreateNewItem, addToStoreNewItem } from '../actionCreators';

interface newItemInterface {
  data: oneDataItem;
  message: string;
}

export function* createOneDataItem({ payload }: CreateNewItem) {
  try {
    const { path, text } = payload;

    const newItem: newItemInterface = yield call(() =>
      api.postData(path, { text })
    );

    const dataType = takeDataTypeFromPath(path);
    yield put(
      addToStoreNewItem({
        id: newItem.data._id,
        text: newItem.data.text,
        dataType,
      })
    );
  } catch (e) {
    yield put(logError((e as Error).message));
  }
}
