import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PlayersList from "./players-list";

export default function Layout(props) {
  const { title } = props;
  const players = useSelector((state) => state.players);
  return (
    <section className="app padding-section">
      <div className="container">
        <h1 className="text-center mb-4">{title}</h1>
        {players.length < 2 ? (
          <div className="d-flex justify-content-center">
            <Link className="btn btn-outline-primary" to="/select-players">
              Выбрать игроков
            </Link>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-8 mb-4">{props.children}</div>
            <div className="col-md-4">
              <PlayersList players={players} isPage={false} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
