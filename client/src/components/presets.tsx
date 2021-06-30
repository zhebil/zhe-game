import React, { ReactElement } from 'react';
import { FetchContainer } from '../components/fetchContainer';
import constants from '../constants';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';
import {
  getPresets,
  updateCurrentPreset,
} from '../redux/ducks/presets/actionCreators';
import PresetsListItem from './presets-list-item';

const Presets: React.FC = (): ReactElement => {
  const presets = useAppSelector((state) => state.presets.presets);
  const status = useAppSelector((state) => state.presets.status);

  const dispatch = useAppDispatch();

  const defaultPreset = constants.DEFAULT_PRESET;
  const onDefaultPresetChoose = (): void => {
    dispatch(
      updateCurrentPreset(defaultPreset.data, defaultPreset.currentName)
    );
  };
  return (
    <FetchContainer
      fetchFunction={getPresets}
      dataLength={presets.length}
      status={status}
    >
      <div className="container section-padding">
        <h1>В разработке</h1>
        <p>Выберите пресет:</p>
        <ul className="list-group">
          {presets.map((i: { name: string; data: any }) => (
            <PresetsListItem key={i.name} {...i} />
          ))}
        </ul>

        <button className="btn btn-primary mt-3">Создать свой</button>

        <button
          onClick={onDefaultPresetChoose}
          className="btn btn-primary mt-3"
        >
          Поставить дефолтный
        </button>
      </div>
    </FetchContainer>
  );
};

export { Presets };
