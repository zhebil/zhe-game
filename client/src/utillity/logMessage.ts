import {
  addMessageActionInterface,
  addNewMessage,
} from '../redux/ducks/messages/actionCreators';
import { messageItem, messageType } from '../redux/ducks/messages/reducer';

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
