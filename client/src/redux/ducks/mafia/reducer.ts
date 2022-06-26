import { MafiaAction, mafiaActionType } from './actionCreators';

export type Card = [string, string];

type initState = {
  part: string[];
};
const initialState: initState = {
  part: [],
};

export const mafia = (
  state: initState = initialState,
  action: MafiaAction
): initState => {
  switch (action.type) {
    case mafiaActionType.SET:
      return { ...state, part: action.payload };

    default:
      return state;
  }
};
