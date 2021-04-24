import { all } from 'redux-saga/effects';
import { gameDataSaga } from './ducks/gameData/saga';

export default function* rootSaga() {
  yield all([gameDataSaga()]);
}
