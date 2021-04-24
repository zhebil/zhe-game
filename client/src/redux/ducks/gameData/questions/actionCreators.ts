import { Action } from 'redux';
import { ID, oneDataItem } from '../../../../types';
import { gameDataStatus } from '../../../types';

export enum questionsActionsType {
  SET_DATA = 'questions/SET_DATA',
  UPDATE = 'questions/UPDATE',
  SET_STATUS = 'questions/SET_STATUS',
}

export interface SetQuestionsActionInterface
  extends Action<questionsActionsType> {
  type: questionsActionsType.SET_DATA;
  payload: oneDataItem[];
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

export const setQuestions = (
  payload: oneDataItem[]
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

export type QuestionsAction =
  | SetQuestionsActionInterface
  | UpdateQuestionsActionInterface
  | SetQuestionsStatusInterface;
