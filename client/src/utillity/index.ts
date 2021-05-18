import { messageItem, messageType } from '../redux/ducks/messages/reducer';
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

export const slideToggle = (
  el: HTMLElement,
  isShow: boolean,
  cb?: any
): void => {
  el.style.display = 'block';
  el.style.height = 'auto';
  const height: number = el.offsetHeight;

  if (!isShow) {
    el.style.height = '';
    setTimeout(() => {
      el.style.height = height + 'px';
    }, 10);
  } else {
    el.style.height = height + 'px';
    setTimeout(() => {
      el.style.height = '0px';
    }, 10);
  }
  setTimeout(() => {
    cb();
  }, 350);
};

let counter = 0;
const messageCounter = (): number => {
  return ++counter;
};
export const createMessage = (
  message: string,
  type: messageType
): messageItem => {
  return {
    id: messageCounter(),
    text: message,
    type,
  };
};
