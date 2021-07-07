import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import constants from '../../constants';
import { useAppDispatch } from '../../hooks/redux.hook';
import {
  deletePresets,
  updateCurrentPreset,
} from '../../redux/ducks/presets/actionCreators';
import { presetInterface } from '../../redux/ducks/presets/reducer';

const PresetsListItem: React.FC<presetInterface> = ({
  name,
  data,
  _id: id,
}): ReactElement => {
  const dispatch = useAppDispatch();
  const onPresetChoose = (): void => {
    dispatch(updateCurrentPreset(data, name));
  };
  const onPresetDelete = (): void => {
    dispatch(deletePresets(id));
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
        <Link
          to={`${constants.ROUTES.PRESETS}/${name}`}
          className="col-auto btn btn-warning mr-2"
        >
          Изменить
        </Link>
        <button onClick={onPresetDelete} className="col-auto btn btn-danger">
          Удалить
        </button>
      </div>
    </li>
  );
};

export default PresetsListItem;
