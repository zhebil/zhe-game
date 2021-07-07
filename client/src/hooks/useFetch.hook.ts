import { useEffect } from 'react';
import { cleanup } from '../layout/FetchContainer';
import { reduxAction } from '../redux/types';
import { useAppDispatch } from './redux.hook';

export const useFetch = (
  cb: reduxAction | null,
  dataLength: number,
  cleanup: cleanup | null
): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cb) {
      if (dataLength === 0) dispatch(cb());
    }
    if (cleanup) {
      return cleanup;
    }
  }, [dispatch, dataLength, cb, cleanup]);
};
