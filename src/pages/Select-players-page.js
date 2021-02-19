import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer } from "../actions";
import PlayersList from "../components/players-list";
import { getRandom } from "../utillity";
import { nanoid } from "nanoid";
import { useHistory } from "react-router-dom";

export default function SelectPlayersPage() {
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const history = useHistory()
  const submitForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const id = nanoid(16);
    if (players.find((item) => item.name.toUpperCase() === name.toUpperCase()))
      return false;
    if (name.trim().length >= 2) dispatch(addPlayer({ name, id }));
    else return false;
  };
  return (
    <div className="select-player padding-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Добавьте игроков</h2>
            {players.length ? (
              <PlayersList players={players} />
            ) : (
              <p className="alert alert-success" role="alert">
                Необходимо выбрать игроков
              </p>
            )}
            <form onSubmit={submitForm} className="row mt-2">
              <div className="col col-8">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Введите имя"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Добавить
              </button>
            </form>
            {players.length >= 2 && (
              <div className="d-flex  mt-4 justify-content-center">
                <button onClick={()=>{history.goBack()}} className="btn col-2 btn-success ">Играть</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
