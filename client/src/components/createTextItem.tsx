import React, { FormEvent, ReactElement, useState } from 'react';
import { useAppDispatch } from '../hooks/redux.hook';
import { createGameDataItem } from '../redux/ducks/gameDataItemsCRUD/actionCreators';
import { getDataTypeByPath, logError } from '../utillity';
import AllDataList from './allDataList';

const CreateTextItem: React.FC<{ path: string; title: string }> = ({
  path,
  title,
}): ReactElement => {
  const dispatch = useAppDispatch();
  const [showDataList, setShowDataList] = useState<boolean>(false);

  const formSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const { text, name } = e.target as HTMLFormElement;
    if (text.value.trim().length === 0) {
      dispatch(logError('Вы ничего не ввели'));
      return;
    }
    const path: string = name;
    dispatch(createGameDataItem({ path, text: text.value }));

    text.value = '';
  };

  const openAllDataList = () => {
    setShowDataList(true);
  };
  const closeAllDataList = () => {
    setShowDataList(false);
  };

  const onChoiseData = (text: string) => {
    dispatch(createGameDataItem({ path, text: text }));
  };

  return (
    <div className="row">
      <div className="col-12 col-md-6 mb-2 mb-md-0">
        <form name={path} onSubmit={formSubmit}>
          <label htmlFor={path} className="form-label">
            <b>Добавить новый</b>
          </label>
          <input
            type="text"
            name="text"
            id={path}
            className="form-control mb-3"
          />
          <button className="btn w-100 btn-primary" type="submit">
            Добавить
          </button>
        </form>
      </div>
      <div className="col-12 col-md-6 mt-auto">
        <button className="btn btn-success" onClick={openAllDataList}>
          Выбрать из списка
        </button>
        {showDataList && (
          <div
            className="modal fade show"
            style={{ display: 'block', background: 'rgba(0,0,0,0.7)' }}
            role="dialog"
            onClick={closeAllDataList}
          >
            <AllDataList
              title={title}
              onChoise={onChoiseData}
              type={getDataTypeByPath(path)}
              onCloseList={closeAllDataList}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export { CreateTextItem };
