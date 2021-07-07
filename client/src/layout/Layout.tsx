import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux.hook';
import { playersSelector } from '../redux/ducks/players/selectors';
import { IPlayer } from '../types';
import PlayersList from '../components/players-list';

const Layout: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}): ReactElement => {
  const players: IPlayer[] = useAppSelector(playersSelector);
  return (
    <section className="app padding-section">
      <div className="container">
        <h1 className="text-center mb-4">{title}</h1>
        {players.length < 2 ? (
          <div className="d-flex justify-content-center">
            <Link className="btn btn-outline-primary" to="/select-players">
              Выбрать игроков
            </Link>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-8 mb-4">{children}</div>
            <div className="col-md-4">
              <PlayersList players={players} isPage={false} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Layout;
