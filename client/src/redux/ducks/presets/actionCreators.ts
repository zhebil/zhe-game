import { Action } from 'redux';
import { gameDataStatus } from '../../types';

export enum presetsActionsType {
  GET_PRESETS = 'presets/GET_DATA',
  SET_PRESETS = 'presets/SET_DATA',
  SET_STATUS = 'presets/SET_STATUS',
  UPDATE_CURRENT = 'presets/UPDATE_CURRENT',
  CREATE = 'presets/CREATE',
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

export interface UpdateCurrentPresetInterface
  extends Action<presetsActionsType> {
  type: presetsActionsType.UPDATE_CURRENT;
  payload: any;
  currentName: string;
}

export interface CreatePresetInterface extends Action<presetsActionsType> {
  type: presetsActionsType.CREATE;
  payload: string;
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

export const updateCurrentPreset = (
  payload: any,
  currentName: string
): UpdateCurrentPresetInterface => {
  return {
    type: presetsActionsType.UPDATE_CURRENT,
    payload,
    currentName,
  };
};

export const createPresets = (payload: string): CreatePresetInterface => {
  return {
    type: presetsActionsType.CREATE,
    payload,
  };
};

export type PresetsAction =
  | SetPresetsActionInterface
  | GetPresetsActionInterface
  | SetPresetsStatusInterface
  | UpdateCurrentPresetInterface
  | CreatePresetInterface;
