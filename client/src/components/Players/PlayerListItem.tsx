import React, { ReactElement } from 'react';
import { deletePlayer } from '../../redux/ducks/players/actionCreators';
import { useAppDispatch } from '../../hooks/redux.hook';
import { ID } from '../../types';

interface PlayerListItemProps {
  text: string;
  id: ID;
  isPage: boolean;
}

const PlayerListItem: React.FC<PlayerListItemProps> = ({
  text,
  id,
  isPage,
}): ReactElement => {
  const dispatch = useAppDispatch();
  const onDeleteItem = (): void => {
    dispatch(deletePlayer(id));
  };
  return (
    <>
      <li className="list-group-item">
        <div className="row justify-content-between">
          <div className="col-auto">
            <h3 className="mb-0">{text}</h3>
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

export { PlayerListItem };
