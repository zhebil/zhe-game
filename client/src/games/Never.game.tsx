import React, { ReactElement, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';
import { fetchNever, updateNever } from '../redux/ducks/never/actionCreators';
import {
  neverSelector,
  neverStatusSelector,
} from '../redux/ducks/never/selectors';
import { playersSelector } from '../redux/ducks/players/selectors';
import { gameDataStatus } from '../redux/types';
import { IPlayer, IRaund, oneDataItem } from '../types';
import { getRandomInteger } from '../utillity';
import { FetchContainer } from '../layout/FetchContainer';

const Never: React.FC = (): ReactElement => {
  const dispatch = useAppDispatch();

  const never: oneDataItem[] = useAppSelector(neverSelector);

  const status: gameDataStatus = useAppSelector(neverStatusSelector);
  const players: IPlayer[] = useAppSelector(playersSelector);

  const [raund, setRaund] = useState<IRaund>({
    player: '',
    nextPlayer: 0,
    text: '',
  });

  const nextRaund = (): void => {
    const dataIdx: number = getRandomInteger(0, never.length - 1);

    setRaund((prev: IRaund): IRaund => {
      const nextPlayer: number =
        prev.nextPlayer < players.length - 1 ? prev.nextPlayer + 1 : 0;

      return {
        player: players[prev.nextPlayer].name,
        nextPlayer: nextPlayer,
        text: never[dataIdx].text,
      };
    });

    dispatch(updateNever(never[dataIdx]._id));
  };

  if (status === gameDataStatus.LOADED && never.length <= 0) {
    return <h2> Игра окончена! К сожалению больше нет вопросов {':('}</h2>;
  }
  return (
    <FetchContainer
      fetchFunction={fetchNever}
      dataLength={never.length}
      status={status}
    >
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
    </FetchContainer>
  );
};

export { Never };
