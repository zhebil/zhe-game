import { dataSelectorFucntion, statusSelectorFucntion } from '../../types';

export const questionsSelector: dataSelectorFucntion = (state) =>
  state.questions.rest;

export const questionsStatusSelector: statusSelectorFucntion = (state) =>
  state.questions.status;
