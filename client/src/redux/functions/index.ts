import { ID, oneDataItem } from '../../types';

export const updateData = (data: any, id: ID): any => {
  const itemIdx = data.rest.findIndex((item: oneDataItem) => item.id === id);
  const item = data.rest[itemIdx];
  return {
    ...data,
    rest: [...data.rest.slice(0, itemIdx), ...data.rest.slice(itemIdx + 1)],
    done: [...data.done, item],
  };
};
