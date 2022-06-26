import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cleanup } from '../layout/FetchContainer';
import { reduxAction } from '../redux/types';

export const useFetch = (
  cb: reduxAction | null,
  dataLength: number,
  cleanup: cleanup | null
): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (cb) {
      if (dataLength === 0) dispatch(cb());
    }
    if (cleanup) {
      return cleanup;
    }
  }, [dispatch, dataLength, cb, cleanup]);
};
