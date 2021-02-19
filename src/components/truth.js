import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDare, updateTruth } from "../actions";
import { getRandom } from "../utillity";

export default function Truth() {
  const truth = useSelector((state) => state.truth.rest);
  const dare = useSelector((state) => state.dare.rest);
  const players = useSelector((state) => state.players);
  const [raund, setRaund] = useState({
    player: "",
    playerIdx: 0,
    type: "",
    text: "",
    first: true,
  });
  const dispatch = useDispatch();
  const getType = (type) => {
    switch (type) {
      case "truth":
        return "Правда";
      case "dare":
        return "Действие";
      default:
        break;
    }
  };
  const getTruth = () => {
    const dataIdx = getRandom(0, truth.length - 1);
    const nextPlayer =
      raund.playerIdx < players.length - 1 ? raund.playerIdx + 1 : 0;
    setRaund({
      player: players[raund.playerIdx].name,
      playerIdx: nextPlayer,
      type: "truth",
      text: truth[dataIdx].text,
      first: false,
    });
    dispatch(updateTruth(truth[dataIdx].id));
  };
  const getDare = () => {
    const dataIdx = getRandom(0, dare.length - 1);
    const nextPlayer =
      raund.playerIdx < players.length - 1 ? raund.playerIdx + 1 : 0;
    setRaund({
      player: players[raund.playerIdx].name,
      playerIdx: nextPlayer,
      type: "dare",
      text: dare[dataIdx].text,
      first: false,
    });
    dispatch(updateDare(dare[dataIdx].id));
  };
  const getRandomType = () => {
    const number = Math.random();
    console.log(number);
    return number >= 0.5 ? getDare() : getTruth();
  };
  const typeText = getType(raund.type);
  if (truth.length <= 0 || dare.length <= 0) {
    return <h2> Игра окончена! К соалению больше нет вопросов {":("}</h2>;
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
              <h3 className="col-auto mb-0">{typeText}: </h3>
              <p className="col alert mb-0 alert-success">{raund.text}</p>
            </div> </>
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
}
