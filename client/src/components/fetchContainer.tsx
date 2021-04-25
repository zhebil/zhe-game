import { ReactElement } from 'react';
import { useFetch } from '../hooks/fetch.hook';
import { gameDataStatus, reduxAction } from '../redux/types';
import Spinner from './spinner';

export interface fetchContainer {
  status: gameDataStatus;
  children: ReactElement;
  fetchFunction: reduxAction;
  dataLength: number;
}

export const FetchContainer: React.FC<fetchContainer> = ({
  status,
  children,
  fetchFunction,
  dataLength,
}: fetchContainer): ReactElement => {
  useFetch(fetchFunction, dataLength);
  if (status === gameDataStatus.LOADNIG) {
    return (
      <div className="d-flex justify-content-center  align-items-center">
        <Spinner />
      </div>
    );
  }
  if (status === gameDataStatus.ERROR) {
    return <h1>Что-то пошло не так</h1>;
  }
  return children;
};
