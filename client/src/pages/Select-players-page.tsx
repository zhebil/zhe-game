import React from 'react';
import { addPlayer } from '../redux/ducks/players/actionCreators';
import PlayersList from '../components/players-list';
import { nanoid } from 'nanoid';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';
import { ID, IPlayer } from '../types';
import { playersSelector } from '../redux/ducks/players/selectors';

const SelectPlayersPage: React.FC = (): JSX.Element => {
  const players: IPlayer[] = useAppSelector(playersSelector);

  const dispatch = useAppDispatch();
  const history = useHistory();
  const submitForm = (e: React.FormEvent): void => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const name: string = form.personName.value;

    form.personName.value = '';

    const id: ID = nanoid(16);

    if (players.find((item) => item.name.toUpperCase() === name.toUpperCase()))
      return;
    if (name.trim().length >= 2) dispatch(addPlayer({ name, id }));
    else return;
  };
  return (
    <div className="select-player padding-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Добавьте игроков</h2>
            {players.length ? (
              <PlayersList players={players} />
            ) : (
              <p className="alert alert-success" role="alert">
                Необходимо выбрать игроков
              </p>
            )}
            <form onSubmit={submitForm} className="row mt-2">
              <div className="col col-8">
                <input
                  type="text"
                  className="form-control"
                  id="personName"
                  placeholder="Введите имя"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Добавить
              </button>
            </form>
            {players.length >= 2 && (
              <div className="d-flex  mt-4 justify-content-center">
                <button
                  onClick={(): void => {
                    history.goBack();
                  }}
                  className="btn col-12 col-md-2 btn-success"
                >
                  Играть
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPlayersPage;
