import { all } from 'redux-saga/effects';
import { neverSaga } from './ducks/never/saga';
import { questionsSaga } from './ducks/questions/saga';
import { truthOrDareSaga } from './ducks/truth-or-dare/saga';

export default function* rootSaga() {
  yield all([truthOrDareSaga(), neverSaga(), questionsSaga()]);
}
