import React, { useCallback } from 'react';
import { useParams } from 'react-router';
import { ChangePresetData } from '../components/ChangePresetData';
import { FetchContainer } from '../layout/FetchContainer';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';
import { setDataCRUDToStore } from '../redux/ducks/gameDataItemsCRUD/actionCreators';
import { getOnePreset } from '../redux/ducks/presets/actionCreators';
import { presetInterface } from '../redux/ducks/presets/reducer';
import { gameDataStatus } from '../redux/types';

const ChangePresetPage = () => {
  const { name } = useParams<{ name: string }>();
  const dispatch = useAppDispatch();
  const currentPreset = useAppSelector((state) => state.gameDataCRUD);

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
    dispatch(setDataCRUDToStore(resetToUpdatePresetData));
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
          <ChangePresetData title="Правда" path={path.truth} data={truth} />
          <ChangePresetData title="Действие" path={path.dare} data={dare} />
          <ChangePresetData
            title="Никогда не..."
            path={path.never}
            data={never}
          />
        </>
      ) : (
        <></>
      )}
    </FetchContainer>
  );
};

export { ChangePresetPage };
