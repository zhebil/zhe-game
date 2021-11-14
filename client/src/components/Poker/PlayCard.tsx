import React, { FC } from 'react';
import { Card } from '../../redux/ducks/poker/reducer';

const PlayCard: FC<{ card: Card; isShowed: boolean }> = ({
  card,
  isShowed,
}) => {
  return (
    <li className="card poker-card">
      {isShowed ? (
        <>
          <div className="poker-card-back">
            <img src="/assets/img/card-back.png" className="fade" alt="" />
          </div>
          <div className="poker-card-show">
            <div className="card-body">
              <h2 className="card-title"> {card[0]}</h2>

              <img
                className="mx-auto img d-block"
                src={`/assets/img/${card[1]}.svg`}
                alt={card[0] + card[1]}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="poker-card-back">
          <img src="/assets/img/card-back.png" alt="" />
        </div>
      )}
    </li>
  );
};

export default PlayCard;
