import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../hooks/redux.hook';

import {
  changeMafiaAction,
  getMafiaAction,
  killPlayerAction,
} from '../redux/ducks/mafia/actionCreators';
type PlayerTypes = 'sheriff' | 'don' | 'mafia' | 'citizen';
const dictionary = {
  sheriff: 'Шериф',
  don: 'Дон',
  mafia: 'Мафія',
  citizen: 'Мирний житель',
  ' ': ' ',
};
const checkDictionary = {
  sheriff: 'Шериф',
  don: 'Мафія',
  mafia: 'Мафія',
  citizen: 'Мирний житель',
  ' ': ' ',
};
const MafiaGame: React.FC = (): ReactElement => {
  const dispatch = useDispatch();
  const [currentPlayer, setCurrentPlayer] = useState<number | null>(null);
  const possiblePlayersCount = [8, 9, 10];
  const [playersCount, setPlayersCount] = useState(10);
  const players = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const part = useAppSelector((state) => state.mafia.part);
  const currentPlayers = players.slice(0, playersCount);

  const currentPlayerRole =
    currentPlayer && part.length === playersCount
      ? (part[currentPlayer - 1] as PlayerTypes)
      : '';

  const [checkedRole, setCheckedRole] = useState<number | null>(null);
  const [isKiller, setIsKiller] = useState(false);
  const viewCheckButton = (idx: number) => {
    return (
      ((currentPlayerRole === 'sheriff' && !part.some((i) => i === ' ')) ||
        (currentPlayerRole === 'don' && isKiller)) &&
      currentPlayer !== idx + 1 &&
      checkedRole === null
    );
  };
  const clear = () => {
    setCheckedRole(null);
    setIsKiller(false);
  };
  return (
    <div className="app">
      <div className="app__top">
        <section className="app padding-section">
          <div className="container">
            <h1 className="text-center mb-4">Мафія</h1>

            <div className="row">
              <div className="col-md-8 mb-4">
                <div className="d-flex align-items-center">
                  <p className="mr-2 mb-0">Оберіть кількість гравців:</p>
                  <select
                    value={playersCount}
                    onChange={(e) => setPlayersCount(Number(e.target.value))}
                  >
                    {possiblePlayersCount.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-2 mb-2">
                  {!currentPlayer ? (
                    <select
                      className="form-control"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setCurrentPlayer(Number(e.target.value))
                      }
                    >
                      <option value="">Оберіть гравця</option>
                      {currentPlayers.map((i) => {
                        return (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        );
                      })}
                    </select>
                  ) : (
                    <p>Ви гравець №{currentPlayer}</p>
                  )}
                </div>
                {currentPlayer === 1 && (
                  <button
                    onClick={() => {
                      dispatch(changeMafiaAction(playersCount));
                      clear();
                    }}
                    className="btn mr-2 mb-2 btn-success"
                  >
                    Перетасувати карти
                  </button>
                )}
                <button
                  onClick={() => {
                    dispatch(getMafiaAction());
                    clear();
                  }}
                  className="btn mb-2 btn-primary"
                >
                  Отримати роль
                </button>

                <div>
                  {currentPlayers.map((i, idx) => (
                    <div
                      className="d-flex align-items-center mt-1 mb-1"
                      style={{ height: '40px' }}
                    >
                      <p className="mb-0">
                        {i}
                        {currentPlayer === idx + 1 || checkedRole === idx
                          ? ' - ' +
                            (checkedRole !== null
                              ? checkDictionary[part[idx] as PlayerTypes]
                              : dictionary[part[idx] as PlayerTypes])
                          : ''}
                        {part[idx] === ' ' ? ' - Жорстоко убитий мафією' : ''}
                      </p>

                      {viewCheckButton(idx) && (
                        <button
                          className="ml-auto btn btn-primary"
                          onClick={() => {
                            setCheckedRole(idx);
                          }}
                        >
                          Перевірити
                        </button>
                      )}
                      {currentPlayerRole === 'don' &&
                        currentPlayer !== idx + 1 &&
                        !isKiller && (
                          <button
                            className="ml-auto btn btn-danger"
                            onClick={() => {
                              dispatch(killPlayerAction(idx));
                              setIsKiller(true);
                            }}
                          >
                            Убити
                          </button>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export { MafiaGame };
