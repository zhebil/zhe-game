import { IFetchedData } from '../App';
import { ID, IPlayer } from '../types';
export interface reduxAction {
  type: string;
  payload?: any;
}

export const addPlayer = (player: IPlayer): reduxAction => {
  return {
    type: 'ADD_PLAYER',
    payload: player,
  };
};
export const deleteItem = (id: ID): reduxAction => {
  return {
    type: 'DELETE_PLAYER',
    payload: id,
  };
};
export const setData = (data: IFetchedData): reduxAction => {
  return {
    type: 'SET_DATA',
    payload: data,
  };
};
export const updateTruth = (id: ID): reduxAction => {
  return {
    type: 'UPDATE_TRUTH',
    payload: id,
  };
};
export const updateDare = (id: ID): reduxAction => {
  return {
    type: 'UPDATE_DARE',
    payload: id,
  };
};
export const updateNever = (id: ID): reduxAction => {
  return {
    type: 'UPDATE_NEVER',
    payload: id,
  };
};
export const updateQuestions = (id: ID): reduxAction => {
  return {
    type: 'UPDATE_QUESTIONS',
    payload: id,
  };
};
