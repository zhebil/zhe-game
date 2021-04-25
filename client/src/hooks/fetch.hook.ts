import { useEffect } from 'react';
import { reduxAction } from '../redux/types';
import { useAppDispatch } from './redux.hook';

export const useFetch = (cb: reduxAction, dataLength: number): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (dataLength === 0) dispatch(cb());
  }, [dispatch, dataLength, cb]);
};
