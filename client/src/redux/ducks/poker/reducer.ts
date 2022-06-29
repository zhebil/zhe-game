import { PokerAction, pokerActionType } from './actionCreators';
import { IPlayer } from '../../../types';

export type Card = [string, string];

type initState = {
  currentPlayer: IPlayer | null;
  deck: Card[];
};
const initialState: initState = {
  currentPlayer: null,
  deck: [],
};

export const poker = (
  state: initState = initialState,
  action: PokerAction
): initState => {
  switch (action.type) {
    case pokerActionType.SET:
      return { ...state, deck: action.payload };
    case pokerActionType.CHANGE_PLAYER:
      return { ...state, currentPlayer: action.payload };
    default:
      return state;
  }
};
