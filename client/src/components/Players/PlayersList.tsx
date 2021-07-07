import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { constants } from '../../constants';
import { IPlayer } from '../../types';
import { PlayerListItem } from './PlayerListItem';

const PlayersList: React.FC<{ players: IPlayer[]; isPage?: boolean }> = ({
  players,
  isPage = true,
}): ReactElement => {
  return (
    <>
      <ul className="list-group">
        {players.map((player) => {
          return (
            <PlayerListItem
              key={player.id}
              id={player.id}
              isPage={isPage}
              text={player.name}
            />
          );
        })}
      </ul>
      {!isPage && <Link to={constants.ROUTES.SELECT_PLAYER}>Изменить</Link>}
    </>
  );
};

export { PlayersList };
