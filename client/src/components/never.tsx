import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateNever } from '../actions/index';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';
import { IPlayer, IRaund, oneDataItem } from '../types';
import { getRandom } from '../utillity';

export default function Never() {
  const never: oneDataItem[] = useAppSelector((state) => state.never.rest);
  const dispatch = useAppDispatch();
  const players: IPlayer[] = useAppSelector((state) => state.players);

  const [raund, setRaund] = useState<IRaund>({
    player: '',
    nextPlayer: 0,
    text: '',
  });

  const nextRaund = (): void => {
    const dataIdx: number = getRandom(0, never.length - 1);

    setRaund((prev) => {
      const nextPlayer: number =
        prev.nextPlayer < players.length - 1 ? prev.nextPlayer + 1 : 0;

      return {
        player: players[prev.nextPlayer].name,
        nextPlayer: nextPlayer,
        text: never[dataIdx].text,
      };
    });

    dispatch(updateNever(never[dataIdx].id));
  };
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
}
