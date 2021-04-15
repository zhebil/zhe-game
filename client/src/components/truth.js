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
  const data = { dare, truth };
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
  const newRaund = (type, cb) => {
    const dataIdx = getRandom(0, data[type].length - 1);
    const nextPlayer =
      raund.playerIdx < players.length - 1 ? raund.playerIdx + 1 : 0;
    setRaund({
      player: players[raund.playerIdx].name,
      playerIdx: nextPlayer,
      type: type,
      text: data[type][dataIdx].text,
      first: false,
    });
    dispatch(cb(data[type][dataIdx].id));
  };
  const getTruth = () => {
    newRaund("truth", updateTruth)
  };
  const getDare = () => {
    newRaund("dare", updateDare)
  };
  const getRandomType = () => {
    const number = Math.random();
    return number >= 0.5 ? getDare() : getTruth();
  };
  const typeText = getType(raund.type);
  if (truth.length <= 0 || dare.length <= 0) {
    return <h2> Игра окончена! К сожалению больше нет вопросов {":("}</h2>;
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
              <div
                className='col-12  mb-0'
              >
              <p className={`alert ${
                  raund.type === "dare" ? "alert-danger" : "alert-success"
                }`}>
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
}
