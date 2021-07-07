import { gameOneDataTypeState } from '../redux/types';
import { oneDataItem } from '../types';

export const tranformDataByAddingToStore = (
  data: oneDataItem[]
): gameOneDataTypeState => {
  return {
    all: data,
    rest: data,
    done: [],
  };
};
