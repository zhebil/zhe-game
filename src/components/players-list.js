import React from "react";
import ListItem from "./list-item";

export default function PlayersList({ players }) {
  return (
    <div>
      <ul className="list-group">
        {players.map((player) => {
          return (
            <ListItem key={player.id} id={player.id} content={player.name} />
          );
        })}
      </ul>
    </div>
  );
}
