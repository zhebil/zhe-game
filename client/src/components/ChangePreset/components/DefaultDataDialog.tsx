import React from 'react';
import { useAppSelector } from '../../../hooks/redux.hook';
import { fetchAllData } from '../../../redux/ducks/allDataList/actionCreators';
import { someOneDataType } from '../../../redux/ducks/gameDataItemsCRUD/actionCreators';
import { FetchContainer } from '../../../layout/FetchContainer';

interface defaultDataDialogProps {
  title: string;
  onChoise: (text: string) => void;
  onCloseList: () => void;
  type: someOneDataType;
}

const DefaultDataDialog: React.FC<defaultDataDialogProps> = ({
  title,
  onChoise,
  onCloseList,
  type,
}) => {
  const status = useAppSelector((state) => state.allData.status);
  const thisTypeData = useAppSelector((state) => state.allData[type]);

  return (
    <FetchContainer
      fetchFunction={fetchAllData}
      status={status}
      dataLength={thisTypeData.length}
    >
      <div
        className="modal-dialog modal-dialog-scrollable"
        onClick={(e) => e.stopPropagation()}
        role="document"
      >
        <article className="modal-content">
          <header className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onCloseList}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </header>
          <div className="modal-body">
            <ul className="list-group">
              {thisTypeData.map((i) => (
                <li
                  key={i._id}
                  onClick={() => {
                    onChoise(i.text);
                  }}
                  className="list-group-item cursor-pointer"
                >
                  {i.text}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </FetchContainer>
  );
};

export { DefaultDataDialog };
