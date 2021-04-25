import { gameOneDataTypeState } from '../redux/types';
import { oneDataItem } from '../types';

export const getRandom = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const transformData = (data: oneDataItem[]): gameOneDataTypeState => {
  return {
    all: data,
    rest: data,
    done: [],
  };
};
