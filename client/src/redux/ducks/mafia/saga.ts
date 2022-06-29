import { put, takeLatest } from 'redux-saga/effects';
import api from '../../../api/api';
import { logError } from '../../../utillity';
import {
  getMafiaAction,
  mafiaActionType,
  setMafiaAction,
} from './actionCreators';

export function* getDeck() {
  try {
    const response = (yield api.getMafia()) as {
      data: string[];
      message: string;
    };

    yield put(setMafiaAction(response.data));
  } catch (e) {
    yield put(logError((e as Error).message));
  }
}

export function* mafiaSaga() {
  yield takeLatest(mafiaActionType.CHANGE, function* changeDeck(action) {
    try {
      // @ts-ignore
      yield api.changeMafia(action.count);
      yield put(getMafiaAction());
    } catch (e) {
      yield put(logError((e as Error).message));
    }
  });
  yield takeLatest(mafiaActionType.KILL, function* kill(action) {
    try {
      // @ts-ignore
      yield api.killPlayer(action.player);
      yield put(getMafiaAction());
    } catch (e) {
      yield put(logError((e as Error).message));
    }
  });
  yield takeLatest(mafiaActionType.GET, getDeck);
}
