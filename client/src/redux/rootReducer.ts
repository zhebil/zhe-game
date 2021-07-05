import { combineReducers } from 'redux';
import { never } from './ducks/never/reducer';
import { players } from './ducks/players/reducer';
import { questions } from './ducks/questions/reducer';
import { truthOrDare } from './ducks/truth-or-dare/reducer';
import { messages } from './ducks/messages/reducer';
import { presets } from './ducks/presets/reducer';
import { gameDataCRUD } from './ducks/gameDataItemsCRUD/reducer';
import { allData } from './ducks/allDataList/reducer';
export const rootReducer = combineReducers({
  truthOrDare,
  never,
  players,
  questions,
  messages,
  presets,
  gameDataCRUD,
  allData,
});
