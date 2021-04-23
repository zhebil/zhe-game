import React from 'react';
import { Link } from 'react-router-dom';
import { IPlayer } from '../types';
import ListItem from './list-item';

const PlayersList: React.FC<{ players: IPlayer[]; isPage?: boolean }> = ({
  players,
  isPage = true,
}): JSX.Element => {
  return (
    <>
      <ul className="list-group">
        {players.map((player) => {
          return (
            <ListItem
              key={player.id}
              id={player.id}
              isPage={isPage}
              content={player.name}
            />
          );
        })}
      </ul>
      {!isPage && <Link to="/select-players">Изменить </Link>}
    </>
  );
};

export default PlayersList;
