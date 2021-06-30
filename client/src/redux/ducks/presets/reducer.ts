import { gameDataStatus } from '../../types';
import { PresetsAction, presetsActionsType } from './actionCreators';

const initialState: any = {
  presets: [],
  status: gameDataStatus.NEVER,
  current: {
    truth: 'truth',
    dare: 'dare',
    never: 'never',
  },
  currentName: 'default',
};

export const presets = (state = initialState, action: PresetsAction): any => {
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
