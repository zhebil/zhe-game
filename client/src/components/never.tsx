import React, { useState } from 'react';
import { useFetch } from '../hooks/fetch.hook';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';
import { fetchNever, updateNever } from '../redux/ducks/never/actionCreators';
import { gameDataStatus } from '../redux/types';
import { IPlayer, IRaund, oneDataItem } from '../types';
import { getRandom } from '../utillity';
import Spinner from './spinner';

const Never: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const never: oneDataItem[] = useAppSelector((state) => state.never.rest);

  useFetch(fetchNever, never.length);

  const status: gameDataStatus = useAppSelector((state) => state.never.status);
  const players: IPlayer[] = useAppSelector((state) => state.players);

  const [raund, setRaund] = useState<IRaund>({
    player: '',
    nextPlayer: 0,
    text: '',
  });

  const nextRaund = (): void => {
    const dataIdx: number = getRandom(0, never.length - 1);

    setRaund(
      (prev: IRaund): IRaund => {
        const nextPlayer: number =
          prev.nextPlayer < players.length - 1 ? prev.nextPlayer + 1 : 0;

        return {
          player: players[prev.nextPlayer].name,
          nextPlayer: nextPlayer,
          text: never[dataIdx].text,
        };
      }
    );

    dispatch(updateNever(never[dataIdx]._id));
  };
  if (status === gameDataStatus.LOADNIG) {
    return (
      <div className="d-flex justify-content-center vh-100 align-items-center">
        <Spinner />
      </div>
    );
  }
  if (status === gameDataStatus.ERROR) {
    return <h1>Что-то пошло не так</h1>;
  }
  if (never.length <= 0) {
    return <h2> Игра окончена! К сожалению больше нет вопросов {':('}</h2>;
  }
  return (
    <div className="d-flex flex-column h-100">
      {raund.text ? (
        <>
          <div className="alert alert-success">
            <h3>{raund.text}</h3>
          </div>
          <button onClick={nextRaund} className="btn mt-auto btn-primary">
            Следущий вопрос
          </button>
        </>
      ) : (
        <button onClick={nextRaund} className="btn btn-primary">
          Начать
        </button>
      )}
    </div>
  );
};

export default Never;
