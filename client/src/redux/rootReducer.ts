import { combineReducers } from 'redux';
import { dare } from './ducks/gameData/dare/reducer';
import { never } from './ducks/gameData/never/reducer';
import { players } from './ducks/players/reducer';
import { questions } from './ducks/gameData/questions/reducer';
import { truth } from './ducks/gameData/truth/reducer';

export const rootReducer = combineReducers({
  dare,
  never,
  players,
  questions,
  truth,
});
