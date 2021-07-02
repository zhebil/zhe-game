import { ID, oneDataItem } from '../../../types';
import { gameDataStatus } from '../../types';
import { PresetsAction, presetsActionsType } from './actionCreators';

export interface presetDataInterface {
  truth: string;
  dare: string;
  never: string;
}

export interface gamePresetData {
  truth: oneDataItem[];
  dare: oneDataItem[];
  never: oneDataItem[];
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
  toUpdate: toUpdatePresetInterface;
}

export interface toUpdatePresetInterface {
  preset: presetInterface | {};
  data: gamePresetData;
  status: gameDataStatus;
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
  toUpdate: {
    preset: {},
    data: {
      truth: [],
      dare: [],
      never: [],
    },
    status: gameDataStatus.NEVER,
  },
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
    case presetsActionsType.SET_ONE:
      return {
        ...state,
        toUpdate: action.payload,
      };
    case presetsActionsType.SET_PRESET_STATUS:
      return {
        ...state,
        toUpdate: {
          ...state.toUpdate,
          status: action.payload,
        },
      };
    default:
      return state;
  }
};
