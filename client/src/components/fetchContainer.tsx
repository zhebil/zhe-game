import { ReactElement } from 'react';
import { useFetch } from '../hooks/fetch.hook';
import { gameDataStatus, reduxAction } from '../redux/types';
import ErrorIndicator from './errorIndicator';
import Spinner from './spinner';

export interface fetchContainer {
  status: gameDataStatus;
  children: ReactElement;
  fetchFunction?: reduxAction | null;
  dataLength?: number;
  cleanup?: () => void;
}

export const FetchContainer: React.FC<fetchContainer> = ({
  status,
  children,
  fetchFunction = null,
  dataLength = 0,
  cleanup = () => {},
}: fetchContainer): ReactElement => {
  useFetch(fetchFunction, dataLength, cleanup);

  if (status === gameDataStatus.LOADNIG) {
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
