import { dataSelectorFucntion, statusSelectorFucntion } from '../../types';

export const neverSelector: dataSelectorFucntion = (state) => state.never.rest;

export const neverStatusSelector: statusSelectorFucntion = (state) =>
  state.never.status;
