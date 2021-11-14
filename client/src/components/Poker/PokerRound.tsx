import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';
import { playersSelector } from '../../redux/ducks/players/selectors';
import {
  changePokerAction,
  getPokerAction,
} from '../../redux/ducks/poker/actionCreators';

import { IPlayer } from '../../types';
import PlayCard from './PlayCard';

const PokerRound: FC<{ currentPlayer: IPlayer }> = ({ currentPlayer }) => {
  const dispatch = useAppDispatch();

  const [currentStreet, setCurrentStreet] = useState(0);
  const [showMyCard, setShowMyCard] = useState<boolean>(true);
  const deck = useAppSelector((state) => state.poker.deck);

  const players = useAppSelector(playersSelector);

  const number = players.findIndex((i) => i.id === currentPlayer.id) + 1;

  const startIndex = number * 2 - 2;
  const endIndex = number * 2;
  const myCard = deck.slice(startIndex, endIndex);

  const roundCards = deck.slice(players.length * 2, players.length * 2 + 5);

  const isShowed = (i: number) => {
    if (currentStreet === 0) {
      return false;
    }
    if (currentStreet === 1 && i < 3) {
      return true;
    }
    if (currentStreet === 2 && i < 4) {
      return true;
    }
    if (currentStreet === 3 && i < 5) {
      return true;
    }
    if (currentStreet > 3) {
      setCurrentStreet(0);
    }
    return false;
  };

  return (
    <div>
      <div className="row mb-3">
        <div className="col">
          <button
            onClick={() => {
              dispatch(changePokerAction());
            }}
            className="btn mr-2 btn-danger"
          >
            Перетасовать
          </button>
          <button
            onClick={() => {
              dispatch(getPokerAction());
              setCurrentStreet(0);
            }}
            className="btn mr-2 btn-success"
          >
            Получить колоду
          </button>
          <button
            onClick={() => {
              setCurrentStreet(currentStreet + 1);
            }}
            className="btn btn-primary"
          >
            Следущая улица
          </button>
        </div>
      </div>
      {deck.length ? (
        <div className="row">
          <div className="col">
            <p className="h2">Карты на столе:</p>
            <ul className="d-flex">
              {roundCards.map((i, idx) => (
                <PlayCard key={i[0] + i[1]} card={i} isShowed={isShowed(idx)} />
              ))}
            </ul>
            <div className="row">
              <p className="h2 col">Мои карты:</p>
              <div className="col-auto ml-auto">
                <button
                  onClick={() => {
                    setShowMyCard(!showMyCard);
                  }}
                  className="btn btn-primary"
                >
                  {showMyCard ? 'Скрыть' : 'Показать'}
                </button>
              </div>
            </div>
            <ul className="d-flex">
              {myCard.map((i) => (
                <PlayCard key={i[0] + i[1]} card={i} isShowed={showMyCard} />
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className={`alert d-block alert-warning`}>
          Нажмите на кнопку "Получить колоду", чтобы начать
        </p>
      )}
    </div>
  );
};
export default PokerRound;
