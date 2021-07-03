import { Action } from 'redux';
import { ID } from '../../../types';
import { gameDataStatus } from '../../types';
import {
  presetDataInterface,
  presetInterface,
  toUpdatePresetInterface,
} from './reducer';

export enum presetsActionsType {
  GET_PRESETS = 'presets/GET_DATA',
  SET_PRESETS = 'presets/SET_DATA',
  SET_STATUS = 'presets/SET_STATUS',
  UPDATE_CURRENT = 'presets/UPDATE_CURRENT',
  CREATE = 'presets/CREATE',
  DELETE = 'presets/DELETE',
  GET_ONE = 'presets/GET_ONE',
  SET_ONE = 'presets/SET_ONE',
  SET_PRESET_STATUS = 'presets/SET_PRESET_STATUS',
  DELETE_ITEM = 'presets/DELETE_ITEM',
}

export interface SetPresetsActionInterface extends Action<presetsActionsType> {
  type: presetsActionsType.SET_PRESETS;
  payload: presetInterface[];
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
  payload: presetDataInterface;
  currentName: string;
}

export interface CreatePresetInterface extends Action<presetsActionsType> {
  type: presetsActionsType.CREATE;
  payload: string;
  history: any;
}

export interface DeletePresetInterface extends Action<presetsActionsType> {
  type: presetsActionsType.DELETE;
  payload: ID;
}

export interface GetOnePresetInterface extends Action<presetsActionsType> {
  type: presetsActionsType.GET_ONE;
  payload: string;
}

export interface SetOnePresetInterface extends Action<presetsActionsType> {
  type: presetsActionsType.SET_ONE;
  payload: toUpdatePresetInterface;
}

export interface SetUpdatedPresetStatusInterface
  extends Action<presetsActionsType> {
  type: presetsActionsType.SET_PRESET_STATUS;
  payload: gameDataStatus;
}

export interface UpdatePresetDataByDeleteItem
  extends Action<presetsActionsType> {
  type: presetsActionsType.DELETE_ITEM;
  payload: deletedItemPayload;
}

export interface deletedItemPayload {
  id: ID;
  dataType: someOneDataType;
}

export type someOneDataType = 'truth' | 'dare' | 'never';

export const setPresets = (
  payload: presetInterface[]
): SetPresetsActionInterface => {
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
  payload: presetDataInterface,
  currentName: string
): UpdateCurrentPresetInterface => {
  return {
    type: presetsActionsType.UPDATE_CURRENT,
    payload,
    currentName,
  };
};

export const createPresets = (
  payload: string,
  history: any
): CreatePresetInterface => {
  return {
    type: presetsActionsType.CREATE,
    payload,
    history,
  };
};

export const deletePresets = (payload: ID): DeletePresetInterface => {
  return {
    type: presetsActionsType.DELETE,
    payload,
  };
};

export const getOnePreset = (payload: string): GetOnePresetInterface => {
  return {
    type: presetsActionsType.GET_ONE,
    payload,
  };
};

export const setUpdatedPreset = (
  payload: toUpdatePresetInterface
): SetOnePresetInterface => {
  return {
    type: presetsActionsType.SET_ONE,
    payload,
  };
};

export const setUpdatedPresetStatus = (
  payload: gameDataStatus
): SetUpdatedPresetStatusInterface => {
  return {
    type: presetsActionsType.SET_PRESET_STATUS,
    payload,
  };
};

export const updatePresetDataByDeleteItem = (
  payload: deletedItemPayload
): UpdatePresetDataByDeleteItem => {
  return {
    type: presetsActionsType.DELETE_ITEM,
    payload,
  };
};

export type PresetsAction =
  | SetPresetsActionInterface
  | GetPresetsActionInterface
  | SetPresetsStatusInterface
  | UpdateCurrentPresetInterface
  | CreatePresetInterface
  | DeletePresetInterface
  | GetOnePresetInterface
  | SetOnePresetInterface
  | SetUpdatedPresetStatusInterface
  | UpdatePresetDataByDeleteItem;
