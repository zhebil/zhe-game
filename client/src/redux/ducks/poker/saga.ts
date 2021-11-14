import { put, takeLatest } from 'redux-saga/effects';
import api from '../../../api/api';
import { logError } from '../../../utillity';
import { pokerActionType, setPokerAction } from './actionCreators';
import { Card } from './reducer';

export function* changeDeck() {
  try {
    yield api.changePokerDeck();
  } catch (e) {
    yield put(logError((e as Error).message));
  }
}

export function* getDeck() {
  try {
    const response = (yield api.getPokerDeck()) as {
      data: Card[];
      message: string;
    };

    yield put(setPokerAction(response.data));
  } catch (e) {
    yield put(logError((e as Error).message));
  }
}

export function* pokerSaga() {
  yield takeLatest(pokerActionType.CHANGE, changeDeck);
  yield takeLatest(pokerActionType.GET, getDeck);
}
