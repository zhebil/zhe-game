import React from 'react';
import { useAppSelector } from '../hooks/redux.hook';
import { fetchAllData } from '../redux/ducks/allDataList/actionCreators';
import { someOneDataType } from '../redux/ducks/gameDataItemsCRUD/actionCreators';
import { FetchContainer } from '../layout/FetchContainer';

const AllDataList: React.FC<{
  title: string;
  onChoise: (text: string) => void;
  onCloseList: () => void;
  type: someOneDataType;
}> = ({ title, onChoise, onCloseList, type }) => {
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
        <div className="modal-content">
          <div className="modal-header">
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
          </div>
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
        </div>
      </div>
    </FetchContainer>
  );
};

export default AllDataList;
