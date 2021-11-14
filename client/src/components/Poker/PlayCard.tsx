import React, { FC } from 'react';
import { Card } from '../../redux/ducks/poker/reducer';

const PlayCard: FC<{ card: Card; isShowed: boolean }> = ({
  card,
  isShowed,
}) => {
  return (
    <li className="poker-card">
      {isShowed ? (
        <>
          <div className="poker-card-back">
            <img
              src="/assets/poker-cards/card-back.png"
              className="fade"
              alt=""
            />
          </div>

          <img
            className="mx-auto poker-card-front d-block"
            src={`/assets/poker-cards/${card[0]}-${card[1]}.svg`}
            alt={card[0] + card[1]}
          />
        </>
      ) : (
        <div className="poker-card-back">
          <img src="/assets/poker-cards/card-back.png" alt="" />
        </div>
      )}
    </li>
  );
};

export default PlayCard;
