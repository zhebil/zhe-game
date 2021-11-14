import React, { ReactElement } from 'react';
import PokerRound from '../components/Poker/PokerRound';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';
import { Layout } from '../layout/Layout';
import { playersSelector } from '../redux/ducks/players/selectors';
import { changePlayerAction } from '../redux/ducks/poker/actionCreators';
import { logSuccess } from '../utillity';

const PokerGame: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const currentPlayer = useAppSelector((state) => state.poker.currentPlayer);
  const players = useAppSelector(playersSelector);

  return (
    <div className="app">
      <div className="app__top">
        <Layout title="Покер">
          {currentPlayer ? (
            <>
              <h2>Игрок:{currentPlayer.name}</h2>
              <PokerRound currentPlayer={currentPlayer} />
            </>
          ) : (
            <select
              className="form-control"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                const player = players.find((i) => i.id === e.target.value);
                if (!player) {
                  dispatch(logSuccess('Неверний пользователь'));
                  return;
                }
                dispatch(changePlayerAction(player));
              }}
            >
              <option value="">Выберите игрока</option>
              {players.map((i) => {
                return (
                  <option key={i.id} value={i.id}>
                    {i.name}
                  </option>
                );
              })}
            </select>
          )}
        </Layout>
      </div>
    </div>
  );
};

export { PokerGame };
