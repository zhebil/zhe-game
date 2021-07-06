import { ID, oneDataItem } from '../../types';
import { AddItemPayload } from '../ducks/gameDataItemsCRUD/actionCreators';

export const updateData = (data: any, id: ID): any => {
  const itemIdx = data.rest.findIndex((item: oneDataItem) => item._id === id);
  const item = data.rest[itemIdx];

  return {
    ...data,
    rest: data.rest.filter((item: oneDataItem) => item._id !== id),
    done: [...data.done, item],
  };
};

export const deleteDataItem = (id: ID, data: oneDataItem[]): oneDataItem[] => {
  return data.filter((item) => item._id !== id);
};

export const addDataItem = (
  { id, text }: AddItemPayload,
  items: oneDataItem[]
) => {
  const newItem: oneDataItem = { _id: id, text };
  return [...items, newItem];
};
