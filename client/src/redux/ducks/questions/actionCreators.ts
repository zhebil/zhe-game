import { Action } from 'redux';
import { ID } from '../../../types';
import { gameDataStatus, gameOneDataTypeState } from '../../types';

export enum questionsActionsType {
  SET_DATA = 'questions/SET_DATA',
  UPDATE = 'questions/UPDATE',
  SET_STATUS = 'questions/SET_STATUS',
  FETCH = 'questions/FETCH_QUESTIONS',
}

export interface SetQuestionsActionInterface
  extends Action<questionsActionsType> {
  type: questionsActionsType.SET_DATA;
  payload: gameOneDataTypeState;
}
export interface UpdateQuestionsActionInterface
  extends Action<questionsActionsType> {
  type: questionsActionsType.UPDATE;
  payload: ID;
}
export interface SetQuestionsStatusInterface
  extends Action<questionsActionsType> {
  type: questionsActionsType.SET_STATUS;
  payload: gameDataStatus;
}
export interface FetchQuestionsInterface extends Action<questionsActionsType> {
  type: questionsActionsType.FETCH;
}
// export type ActionType = <T extends Action<questionsActionsType>, R>(payload: R)=>{
//   type: T,
//   paylaod: R
// }

export const setQuestions = (
  payload: gameOneDataTypeState
): SetQuestionsActionInterface => {
  return {
    type: questionsActionsType.SET_DATA,
    payload,
  };
};
export const updateQuestions = (
  payload: ID
): UpdateQuestionsActionInterface => {
  return {
    type: questionsActionsType.UPDATE,
    payload,
  };
};
export const updateQuestionsStatus = (
  payload: gameDataStatus
): SetQuestionsStatusInterface => {
  return {
    type: questionsActionsType.SET_STATUS,
    payload,
  };
};
export const fetchQuestions = (): FetchQuestionsInterface => {
  return {
    type: questionsActionsType.FETCH,
  };
};

export type QuestionsAction =
  | SetQuestionsActionInterface
  | UpdateQuestionsActionInterface
  | SetQuestionsStatusInterface
  | FetchQuestionsInterface;
