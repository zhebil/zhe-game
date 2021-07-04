import { oneDataItem } from '../../../types';
import { addDataItem, deleteDataItem } from '../../functions';
import { gameDataStatus } from '../../types';
import { presetInterface } from '../presets/reducer';
import { gameDataCRUDAction, gameDataCRUDActionsType } from './actionCreators';

export interface gamePresetData {
  truth: oneDataItem[];
  dare: oneDataItem[];
  never: oneDataItem[];
}
export interface toUpdatePresetInterface {
  preset: presetInterface | {};
  data: gamePresetData;
  status: gameDataStatus;
}

const initialState: toUpdatePresetInterface = {
  preset: {},
  data: {
    truth: [],
    dare: [],
    never: [],
  },
  status: gameDataStatus.NEVER,
};

export const gameDataCRUD = (
  state = initialState,
  action: gameDataCRUDAction
): toUpdatePresetInterface => {
  let dataType;

  switch (action.type) {
    case gameDataCRUDActionsType.SET:
      return {
        ...action.payload,
      };
    case gameDataCRUDActionsType.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case gameDataCRUDActionsType.DELETE_FOR_STATE:
      dataType = action.payload.dataType;
      return {
        ...state,
        data: {
          ...state.data,
          [dataType]: deleteDataItem(action.payload.id, state.data[dataType]),
        },
      };
    case gameDataCRUDActionsType.ADD_TO_STATE:
      dataType = action.payload.dataType;
      return {
        ...state,
        data: {
          ...state.data,
          [dataType]: addDataItem(action.payload, state.data[dataType]),
        },
      };
    default:
      return state;
  }
};
