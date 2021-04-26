import { IPlayer } from '../../../types';
import { RootState } from '../../store';

export const playersSelector = (state: RootState): IPlayer[] => state.players;
