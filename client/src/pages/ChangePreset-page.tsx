import React, { useCallback } from 'react';
import { useParams } from 'react-router';
import { ChangeData } from '../components/changeData';
import { FetchContainer } from '../components/fetchContainer';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';
import {
  getOnePreset,
  setUpdatedPreset,
} from '../redux/ducks/presets/actionCreators';
import { gameDataStatus } from '../redux/types';

const ChangePresetPage = () => {
  const { name } = useParams<{ name: string }>();
  const dispatch = useAppDispatch();
  const currentPreset = useAppSelector((state) => state.presets.toUpdate);

  const {
    status,
    data: { truth, dare, never },
    preset,
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

  return (
    <FetchContainer
      fetchFunction={fetchFunction}
      status={status}
      cleanup={cleanupFunction}
    >
      <>
        <ChangeData data={truth} />
        <ChangeData data={dare} />
        <ChangeData data={never} />
      </>
    </FetchContainer>
  );
};

export { ChangePresetPage };
