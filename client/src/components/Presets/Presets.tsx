import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { FetchContainer } from '../../layout/FetchContainer';
import { constants } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';
import {
  getPresets,
  updateCurrentPreset,
} from '../../redux/ducks/presets/actionCreators';
import { presetInterface } from '../../redux/ducks/presets/reducer';
import { PresetsListItem } from './PresetsListItem';

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
      <div className="container padding-section">
        <h1>Игровые пресеты</h1>
        <p>Выберите пресет:</p>
        <ul className="list-group">
          {presets.map((i: presetInterface) => (
            <PresetsListItem key={i.name} {...i} />
          ))}
        </ul>

        <Link
          to={constants.ROUTES.CREATE_PRESET}
          className="btn btn-primary mt-3 mr-2"
        >
          Создать свой
        </Link>

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
