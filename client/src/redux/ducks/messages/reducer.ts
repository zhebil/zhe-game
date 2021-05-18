import { messageAction, messageActionsType } from './actionCreators';

export enum messageType {
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
}
export interface messageItem {
  text: string;
  type: messageType;
  id: number;
}
const initialState: messageItem[] = [];
export const messages = (
  state = initialState,
  action: messageAction
): messageItem[] => {
  switch (action.type) {
    case messageActionsType.ADD_MESSAGE:
      return [...state, action.payload];
    case messageActionsType.REMOVE_MESSAGE:
      return state.filter((i) => i.id !== action.payload);

    default:
      return state;
  }
};
