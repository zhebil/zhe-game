import { ID, IPlayer } from '../../../types';
import { PlayerActionType, playersActionsType } from './actionCreators';

const onDeletePlayer = (items: IPlayer[], itemId: ID): IPlayer[] => {
  return items.filter((item) => item.id !== itemId);
};
const onUpdatePlayer = (items: IPlayer[], updatedItem: IPlayer): IPlayer[] => {
  return items.map((i) => {
    if (i.id === updatedItem.id) {
      return updatedItem;
    }
    return i;
  });
};
export const players = (state = [], action: PlayerActionType) => {
  switch (action.type) {
    case playersActionsType.ADD:
      return [...state, action.payload];
    case playersActionsType.DELETE:
      return onDeletePlayer(state, action.payload);
    case playersActionsType.UPDATE:
      return onUpdatePlayer(state, action.payload);
    default:
      return state;
  }
};
