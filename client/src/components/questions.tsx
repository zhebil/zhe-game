import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';
import { updateQuestions } from '../redux/ducks/gameData/questions/actionCreators';
import { IPlayer, IRaund, oneDataItem } from '../types';
import { getRandom } from '../utillity';

const Questions: React.FC = (): JSX.Element => {
  const questions: oneDataItem[] = useAppSelector(
    (state) => state.questions.rest
  );
  const dispatch = useAppDispatch();
  const players: IPlayer[] = useAppSelector((state) => state.players);

  const [raund, setRaund] = useState<IRaund>({
    player: '',
    nextPlayer: 0,
    text: '',
  });

  const nextRaund = (): void => {
    const dataIdx: number = getRandom(0, questions.length - 1);

    setRaund(
      (prev: IRaund): IRaund => {
        const nextPlayer: number =
          raund.nextPlayer < players.length - 1 ? raund.nextPlayer + 1 : 0;

        return {
          player: players[prev.nextPlayer].name,
          nextPlayer: nextPlayer,
          text: questions[dataIdx].text,
        };
      }
    );

    dispatch(updateQuestions(questions[dataIdx].id));
  };
  if (questions.length <= 0) {
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

export default Questions;
