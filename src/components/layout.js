import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Layout(props) {
  const { title } = props;
  const players = useSelector((state) => state.players);
  return (
    <section className="truth padding-section">
      <div className="container">
        <h1 className="text-center mb-4">{title}</h1>
        {players.length <= 2 ? (
          <div className="d-flex justify-content-center">
            <Link className="btn btn-outline-primary" to="/select-players">
              Выбрать игроков
            </Link>
          </div>
        ) : (
          props.children
        )}
      </div>
    </section>
  );
}
