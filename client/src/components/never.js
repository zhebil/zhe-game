import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNever } from "../actions";
import { getRandom } from "../utillity";

export default function Never() {
  const never = useSelector((state) => state.never.rest);
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players);

  const [raund, setRaund] = useState({
    player: "",
    playerIdx: 0,
    text: "",
  });
  const nextRaund = () => {
    const dataIdx = getRandom(0, never.length - 1);

    const nextPlayer =
      raund.playerIdx < players.length - 1 ? raund.playerIdx + 1 : 0;
    setRaund({
      player: players[raund.playerIdx],
      playerIdx: nextPlayer,
      text: never[dataIdx].text,
    });
    dispatch(updateNever(never[dataIdx].id))
  };
  if(never.length <=0) {
      return <h2> Игра окончена! К сожалению больше нет вопросов {":("}</h2>
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
      ) :  <button onClick={nextRaund} className="btn btn-primary">
            Начать
          </button>}
    </div>
  );
}