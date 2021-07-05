import { gameDataStatus } from '../../types';
import { gamePresetData } from '../gameDataItemsCRUD/reducer';
import { AllDataAction, allDataListActionsType } from './actionCreators';

interface allDataState extends gamePresetData {
  status: gameDataStatus;
}
const initialState: allDataState = {
  truth: [],
  dare: [],
  never: [],
  status: gameDataStatus.NEVER,
};

export const allData = (
  state = initialState,
  action: AllDataAction
): allDataState => {
  switch (action.type) {
    case allDataListActionsType.SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case allDataListActionsType.SET:
      return {
        ...state,
        ...action.payload,
        status: gameDataStatus.LOADED,
      };
    default:
      return state;
  }
};
