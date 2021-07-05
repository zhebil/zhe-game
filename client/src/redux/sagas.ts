import { all } from 'redux-saga/effects';
import { allDataSaga } from './ducks/allDataList/saga';
import { gameDataCRUDSaga } from './ducks/gameDataItemsCRUD/saga';
import { neverSaga } from './ducks/never/saga';
import { presetsSaga } from './ducks/presets/saga';
import { questionsSaga } from './ducks/questions/saga';
import { truthOrDareSaga } from './ducks/truth-or-dare/saga';

export default function* rootSaga() {
  yield all([
    truthOrDareSaga(),
    neverSaga(),
    questionsSaga(),
    presetsSaga(),
    gameDataCRUDSaga(),
    allDataSaga(),
  ]);
}
