import { ReactElement } from 'react';
import { useFetch } from '../hooks/useFetch.hook';
import { gameDataStatus, reduxAction } from '../redux/types';
import { ErrorIndicator } from './ErrorIndicator';
import { Spinner } from './Spinner';

export type cleanup = () => void;

export interface fetchContainer {
  status: gameDataStatus;
  children: ReactElement;
  fetchFunction?: reduxAction | null;
  dataLength?: number;
  cleanup?: cleanup | null;
}

export const FetchContainer: React.FC<fetchContainer> = ({
  status,
  children,
  fetchFunction = null,
  dataLength = 0,
  cleanup = null,
}: fetchContainer): ReactElement => {
  useFetch(fetchFunction, dataLength, cleanup);

  if (status === gameDataStatus.LOADNIG || status === gameDataStatus.NEVER) {
    return (
      <div className="d-flex justify-content-center  align-items-center">
        <Spinner />
      </div>
    );
  }
  if (status === gameDataStatus.ERROR) {
    return <ErrorIndicator />;
  }

  return children;
};
