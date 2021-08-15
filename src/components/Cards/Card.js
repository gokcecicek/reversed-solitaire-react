import "./Card.scss";
import React, { useState, useEffect } from "react";
import getConstants from "../Common/Constants";

function Card({ card, isSelected, isClosed }) {
  
  const [closed, setClosed] = useState("");
  const [select, setSelected] = useState("");

  useEffect(() => {
    let closedState = isClosed ? setClosed(" card-closed") : setClosed(" " + card.suit);
    let selectState = isSelected ? setSelected(" card-selected") : setSelected("");
  }, [isClosed, isSelected, card.suit])
  
  return (
    <div className={"card" + closed + select} >
      <div className="card-container card-rank-left">
        {card.rank}
        <div className="spade-bottom-rank">{getConstants.SYMBOL}</div>
      </div>
      <div className="card-container card-rank-right">
        {card.rank}
      <div className="spade-top-rank">{getConstants.SYMBOL}</div>
      </div>
    </div>
  );
}

export default Card;
