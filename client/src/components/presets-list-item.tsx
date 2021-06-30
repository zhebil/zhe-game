import React, { ReactElement } from 'react';
import { useAppDispatch } from '../hooks/redux.hook';
import { updateCurrentPreset } from '../redux/ducks/presets/actionCreators';

const PresetsListItem: React.FC<{ name: string; data: any }> = ({
  name,
  data,
}): ReactElement => {
  const dispatch = useAppDispatch();
  const onPresetChoose = (): void => {
    dispatch(updateCurrentPreset(data, name));
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
        <button className="col-auto btn btn-warning">Изменить</button>
      </div>
    </li>
  );
};

export default PresetsListItem;
