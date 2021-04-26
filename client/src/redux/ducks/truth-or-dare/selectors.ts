import { dataSelectorFucntion, statusSelectorFucntion } from '../../types';

export const truthSelector: dataSelectorFucntion = (state) =>
  state.truthOrDare.truth.rest;

export const dareSelector: dataSelectorFucntion = (state) =>
  state.truthOrDare.truth.rest;

export const trutOrDareStatusSelector: statusSelectorFucntion = (state) =>
  state.truthOrDare.status;
