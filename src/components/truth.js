import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getRandom } from "../utillity";

export default function Truth() {
  const truth = useSelector((state) => state.truth.rest);
  const dare = useSelector((state) => state.dare.rest);
  const players = useSelector((state) => state.players);
  const [raund, setRaund] = useState({
    player: "",
    type: "",
    text: "",
    first: true,
  });

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
  const startRaund = (type) => {
    switch (type) {
      case "truth":
        const playerIdx = getRandom(0, players.length-1);
        return setRaund({
          player: players[playerIdx].name,
          type: "truth",
          text: truth[0],
          first: false,
        });
        break;

      default:
        break;
    }
  };
  const typeText = getType(raund.type);

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
            <h3>{typeText}: </h3>
            <p className="alert alert-success">{raund.text}</p>
          </>
        )}
      </div>
      <div className="app__body row mt-2">
        <div class="col btn-group" role="group" aria-label="Basic example">
          <button
            onClick={() => startRaund("truth")}
            type="button"
            className="btn btn-primary"
          >
            Правда
          </button>
          <button
            onClick={() => startRaund("dare")}
            type="button"
            className="btn btn-danger"
          >
            Случайно
          </button>
          <button
            onClick={() => startRaund("random")}
            type="button"
            className="btn btn-success"
          >
            Действие
          </button>
        </div>
      </div>
    </div>
  );
}
