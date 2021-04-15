import React from "react";
import { Link } from "react-router-dom";
import ListItem from "./list-item";

export default function PlayersList({ players, isPage = true }) {
  return (
    <>
      <ul className="list-group">
        {players.map((player) => {
          return (
            <ListItem
              key={player.id}
              id={player.id}
              isPage={isPage}
              content={player.name}
            />
          );
        })}
      </ul>
      {!isPage && <Link to="/select-players">Изменить </Link>}
    </>
  );
}
