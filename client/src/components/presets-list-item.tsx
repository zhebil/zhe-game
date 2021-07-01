import React, { ReactElement } from 'react';
import { useAppDispatch } from '../hooks/redux.hook';
import {
  deletePresets,
  updateCurrentPreset,
} from '../redux/ducks/presets/actionCreators';
import { presetDataInterface } from '../redux/ducks/presets/reducer';

const PresetsListItem: React.FC<{ name: string; data: presetDataInterface }> =
  ({ name, data }): ReactElement => {
    const dispatch = useAppDispatch();
    const onPresetChoose = (): void => {
      dispatch(updateCurrentPreset(data, name));
    };
    const onPresetDelete = (): void => {
      dispatch(deletePresets(name));
    };

    return (
      <li className="list-group-item">
        <div className="row align-items-center">
          <p className="col m-0">{name}</p>

          <button
            onClick={onPresetChoose}
            className="col-auto btn btn-success mr-2"
          >
            Выбрать
          </button>
          <button className="col-auto btn btn-warning mr-2">Изменить</button>
          <button onClick={onPresetDelete} className="col-auto btn btn-danger">
            Удалить
          </button>
        </div>
      </li>
    );
  };

export default PresetsListItem;
