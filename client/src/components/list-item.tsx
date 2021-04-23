import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../actions/index';
import { useAppDispatch } from '../hooks/redux.hook';
import { ID } from '../types';
const ListItem: React.FC<{ content: string; id: ID; isPage: boolean }> = ({
  content,
  id,
  isPage,
}) => {
  const dispatch = useAppDispatch();
  const onDeleteItem = (): void => {
    dispatch(deleteItem(id));
  };
  return (
    <>
      <li className="list-group-item">
        <div className="row justify-content-between">
          <div className="col-auto">
            <h3 className="mb-0">{content}</h3>
          </div>
          {isPage && (
            <button
              onClick={onDeleteItem}
              type="button"
              className="col-4 btn btn-danger"
            >
              Удалить
            </button>
          )}
        </div>
      </li>
    </>
  );
};

export default ListItem;
