import "./Card.scss";
import React, { useState, useEffect } from "react";
import { GetConstants } from "../Common/Constant";


function Card({ card, isSelected, isClosed }) {
  
  const [closed, setClosed] = useState("");
  const [select, setSelected] = useState("");

  useEffect(() => {
    isClosed ? setClosed(" card-closed") : setClosed(" " + card.suit);
    isSelected ? setSelected(" card-selected") : setSelected("");
  }, [isClosed, isSelected, card.suit])

  return (
      <div className={"card" + closed + select} data-testid="card-testid">
        <div className="card-container card-rank-left">
        {card.rank}
        <div className="spade-bottom-rank">{GetConstants.SYMBOL}</div>
        </div>
      <div className="card-container card-rank-right">
        {card.rank}
        <div className="spade-top-rank">{GetConstants.SYMBOL}</div>
        </div>
      </div>
  );
}

export default Card;
