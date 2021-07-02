import React, { useCallback } from 'react';
import { useParams } from 'react-router';
import { ChangeData } from '../components/changeData';
import { FetchContainer } from '../components/fetchContainer';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';
import {
  getOnePreset,
  setUpdatedPreset,
} from '../redux/ducks/presets/actionCreators';
import { presetInterface } from '../redux/ducks/presets/reducer';
import { gameDataStatus } from '../redux/types';

const ChangePresetPage = () => {
  const { name } = useParams<{ name: string }>();
  const dispatch = useAppDispatch();
  const currentPreset = useAppSelector((state) => state.presets.toUpdate);

  const {
    status,
    data: { truth, dare, never },
  } = currentPreset;

  const fetchFunction = useCallback(() => getOnePreset(name), [name]);
  const cleanupFunction = useCallback(() => {
    const resetToUpdatePresetData = {
      preset: {},
      data: {
        truth: [],
        dare: [],
        never: [],
      },
      status: gameDataStatus.NEVER,
    };
    dispatch(setUpdatedPreset(resetToUpdatePresetData));
  }, [dispatch]);

  const { data: path } = currentPreset.preset as presetInterface;

  return (
    <FetchContainer
      fetchFunction={fetchFunction}
      status={status}
      cleanup={cleanupFunction}
    >
      {status === gameDataStatus.LOADED ? (
        <>
          <ChangeData path={path.truth} data={truth} />
          <ChangeData path={path.dare} data={dare} />
          <ChangeData path={path.never} data={never} />
        </>
      ) : (
        <></>
      )}
    </FetchContainer>
  );
};

export { ChangePresetPage };
