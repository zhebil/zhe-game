import { all } from 'redux-saga/effects';
import { allDataSaga } from './ducks/allDataList/saga';
import { gameDataCRUDSaga } from './ducks/gameDataItemsCRUD/saga';
import { mafiaSaga } from './ducks/mafia/saga';
import { neverSaga } from './ducks/never/saga';
import { pokerSaga } from './ducks/poker/saga';
import { presetsSaga } from './ducks/presets/saga';
import { questionsSaga } from './ducks/questions/saga';
import { truthOrDareSaga } from './ducks/truth-or-dare/saga';
function* rootSaga() {
  yield all([
    truthOrDareSaga(),
    neverSaga(),
    questionsSaga(),
    presetsSaga(),
    gameDataCRUDSaga(),
    allDataSaga(),
    pokerSaga(),
    mafiaSaga(),
  ]);
}

export { rootSaga };
