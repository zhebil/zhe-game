import { combineReducers } from 'redux';
import { never } from './ducks/never/reducer';
import { players } from './ducks/players/reducer';
import { questions } from './ducks/questions/reducer';
import { truthOrDare } from './ducks/truth-or-dare/reducer';

export const rootReducer = combineReducers({
  truthOrDare,
  never,
  players,
  questions,
});
