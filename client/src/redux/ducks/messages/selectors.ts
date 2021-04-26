import { RootState } from '../../store';
import { messageItem } from './reducer';

export const messageSelector = (state: RootState): messageItem[] => {
  return state.messages;
};
