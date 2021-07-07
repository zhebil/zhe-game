import React, { ReactElement, useState } from 'react';
import { useAppDispatch } from '../hooks/redux.hook';
import { createGameDataItem } from '../redux/ducks/gameDataItemsCRUD/actionCreators';
import { takeDataTypeFromPath } from '../utillity';
import { AddDataForm } from './AddDataForm';
import AllDataList from './allDataList';

const CreateTextItem: React.FC<{ path: string; title: string }> = ({
  path,
  title,
}): ReactElement => {
  const dispatch = useAppDispatch();
  const [showDataList, setShowDataList] = useState<boolean>(false);

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
        <AddDataForm name={path} label="Добавить новый" />
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
              type={takeDataTypeFromPath(path)}
              onCloseList={closeAllDataList}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export { CreateTextItem };
