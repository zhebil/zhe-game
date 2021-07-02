import { useEffect } from 'react';
import { reduxAction } from '../redux/types';
import { useAppDispatch } from './redux.hook';

export const useFetch = (
  cb: reduxAction | null,
  dataLength: number,
  cleanup: () => void
): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cb) {
      if (dataLength === 0) dispatch(cb());
    }
    return cleanup;
  }, [dispatch, dataLength, cb, cleanup]);
};
