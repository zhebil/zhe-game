import { addNewMessage } from '../redux/ducks/messages/actionCreators';
import { messageItem, messageType } from '../redux/ducks/messages/reducer';
import { gameOneDataTypeState } from '../redux/types';
import { oneDataItem } from '../types';
import { addMessageActionInterface } from '../redux/ducks/messages/actionCreators';

export const getRandom = (min: number, max: number): number => {
  if (min > max) {
    throw new Error('min is > max');
  }
  if (min < 0) {
    throw new Error('min is < 0');
  }
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

export const logError = (error: string): addMessageActionInterface =>
  addNewMessage(createMessage(error, messageType.DANGER));

export const logSuccess = (error: string): addMessageActionInterface =>
  addNewMessage(createMessage(error, messageType.SUCCESS));

export const logWarning = (error: string): addMessageActionInterface =>
  addNewMessage(createMessage(error, messageType.WARNING));
