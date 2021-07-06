import { ID } from '../../../types';
import { gameDataStatus } from '../../types';
import { PresetsAction, presetsActionsType } from './actionCreators';

export interface presetDataInterface {
  truth: string;
  dare: string;
  never: string;
}

export interface presetInterface {
  data: presetDataInterface;
  _id: ID;
  name: string;
}

export interface initialPresetState {
  presets: presetInterface[];
  status: gameDataStatus;
  current: presetDataInterface;
  currentName: string;
}

const initialState: initialPresetState = {
  presets: [],
  status: gameDataStatus.NEVER,
  current: {
    truth: 'truth',
    dare: 'dare',
    never: 'never',
  },
  currentName: 'default',
};

export const presets = (
  state = initialState,
  action: PresetsAction
): initialPresetState => {
  switch (action.type) {
    case presetsActionsType.SET_PRESETS:
      return {
        ...state,
        presets: action.payload,
        status: gameDataStatus.LOADED,
      };
    case presetsActionsType.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };

    case presetsActionsType.UPDATE_CURRENT:
      return {
        ...state,
        current: action.payload,
        currentName: action.currentName,
      };

    default:
      return state;
  }
};
