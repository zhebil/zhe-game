import { gameDataCRUDAction } from './actionCreators';

const initialState: {} = {};

export const gameDataCRUD = (
  state = initialState,
  action: gameDataCRUDAction
): {} => {
  switch (action.type) {
    default:
      return state;
  }
};
