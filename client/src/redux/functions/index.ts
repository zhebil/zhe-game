import { ID, oneDataItem } from '../../types';

export const updateData = (data: any, id: ID): any => {
  const itemIdx = data.rest.findIndex((item: oneDataItem) => item._id === id);
  const item = data.rest[itemIdx];

  return {
    ...data,
    rest: data.rest.filter((item: oneDataItem) => item._id !== id),
    done: [...data.done, item],
  };
};
