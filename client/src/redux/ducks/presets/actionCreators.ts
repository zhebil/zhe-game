import { Action } from 'redux';
import { gameDataStatus, gameOneDataTypeState } from '../../types';

export enum presetsActionsType {
  GET_PRESETS = 'presets/GET_DATA',
  SET_PRESETS = 'presets/SET_DATA',
  SET_STATUS = 'presets/SET_STATUS',
}

export interface SetPresetsActionInterface extends Action<presetsActionsType> {
  type: presetsActionsType.SET_PRESETS;
  payload: any[];
}

export interface GetPresetsActionInterface extends Action<presetsActionsType> {
  type: presetsActionsType.GET_PRESETS;
}

export interface SetPresetsStatusInterface extends Action<presetsActionsType> {
  type: presetsActionsType.SET_STATUS;
  payload: gameDataStatus;
}

export const setPresets = (payload: any): SetPresetsActionInterface => {
  return {
    type: presetsActionsType.SET_PRESETS,
    payload,
  };
};

export const getPresets = (): GetPresetsActionInterface => {
  return {
    type: presetsActionsType.GET_PRESETS,
  };
};

export const updatePresetsStatus = (
  payload: gameDataStatus
): SetPresetsStatusInterface => {
  return {
    type: presetsActionsType.SET_STATUS,
    payload,
  };
};

export type PresetsAction =
  | SetPresetsActionInterface
  | GetPresetsActionInterface
  | SetPresetsStatusInterface;
