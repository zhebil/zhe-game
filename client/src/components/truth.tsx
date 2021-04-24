import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../hooks/redux.hook';
import { updateDare } from '../redux/ducks/gameData/dare/actionCreators';
import { updateTruth } from '../redux/ducks/gameData/truth/actionCreators';
import { reduxAction } from '../redux/ducks/players/actionCreators';
import { ID, IPlayer, IRaund, oneDataItem } from '../types';
import { getRandom } from '../utillity';

type RaundType = 'truth' | 'dare' | '';

interface ITruthRaund extends IRaund {
  type: RaundType;
  first: boolean;
}

interface IDataForTruth {
  truth: oneDataItem[];
  dare: oneDataItem[];
}

const Truth: React.FC = (): JSX.Element => {
  const truth: oneDataItem[] = useAppSelector((state) => state.truth.rest);
  const dare: oneDataItem[] = useAppSelector((state) => state.dare.rest);
  const players: IPlayer[] = useAppSelector((state) => state.players);

  const [raund, setRaund] = useState<ITruthRaund>({
    player: '',
    nextPlayer: 0,
    type: '',
    text: '',
    first: true,
  });

  const data: IDataForTruth = { dare, truth };

  const dispatch = useDispatch();
  const getType = (raundType: RaundType): string => {
    return raundType === 'truth' ? 'Правда' : 'Действие';
  };

  const newRaund = (type: RaundType, cb: (id: ID) => reduxAction): void => {
    const dataIdx: number = getRandom(
      0,
      data[type as keyof IDataForTruth].length - 1
    );

    const thisRaundData: oneDataItem =
      data[type as keyof IDataForTruth][dataIdx];

    setRaund(
      (prev: ITruthRaund): ITruthRaund => {
        const nextPlayer: number =
          raund.nextPlayer < players.length - 1 ? raund.nextPlayer + 1 : 0;

        return {
          player: players[prev.nextPlayer].name,
          nextPlayer: nextPlayer,
          type: type,
          text: thisRaundData.text,
          first: false,
        };
      }
    );

    dispatch(cb(thisRaundData.id));
  };

  const getTruth = (): void => {
    newRaund('truth', updateTruth);
  };
  const getDare = (): void => {
    newRaund('dare', updateDare);
  };
  const getRandomType = (): void => {
    const number = Math.random();
    number >= 0.5 ? getDare() : getTruth();
  };

  const typeText: string = getType(raund.type);
  if (truth.length <= 0 || dare.length <= 0) {
    return <h2> Игра окончена! К сожалению больше нет вопросов {':('}</h2>;
  }
  return (
    <div className="app">
      <div className="app__top">
        {raund.first ? (
          <p className="alert alert-danger">
            Правда или действие? Выберите чтобы начать
          </p>
        ) : (
          <>
            <h2> Игрок: {raund.player}</h2>
            <div className="row">
              <h3 className="col-12 mb-2">{typeText}: </h3>
              <div className="col-12  mb-0">
                <p
                  className={`alert ${
                    raund.type === 'dare' ? 'alert-danger' : 'alert-success'
                  }`}
                >
                  {raund.text}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="app__body row mt-2">
        <div className="col btn-group" role="group" aria-label="Basic example">
          <button onClick={getTruth} type="button" className="btn btn-primary">
            Правда
          </button>
          <button
            onClick={getRandomType}
            type="button"
            className="btn btn-danger"
          >
            Случайно
          </button>
          <button onClick={getDare} type="button" className="btn btn-success">
            Действие
          </button>
        </div>
      </div>
    </div>
  );
};

export default Truth;
