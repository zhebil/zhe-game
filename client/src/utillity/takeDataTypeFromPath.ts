import { someOneDataType } from '../redux/ducks/gameDataItemsCRUD/actionCreators';

export const takeDataTypeFromPath = (path: string): someOneDataType => {
  const pathArr = path.split('-');

  return pathArr[pathArr.length - 1] as someOneDataType;
};
