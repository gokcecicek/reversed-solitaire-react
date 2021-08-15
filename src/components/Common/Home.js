import React, { useEffect, useState } from "react";
import "./common.scss";
import Stock from "../Stock/Stock";
import ShuffleDeck from "../Tableau/Shuffle";
import TableauPile from "../Tableau/TableauPile";
import Tableau from "../Tableau/Tableau";
import Foundation from "../Foundation/Foundation";

function Home() {
  const [cards, setcards] = useState({});
  const [table, setTable] = useState({
    cards: [],
    decks: [],
    selectedCard: "",
    selectedDeck: "",
    selected: [],
    hands: 0
  });

  useEffect(() => {
    const shuffledCards = ShuffleDeck();
    const orderedSet = TableauPile(shuffledCards);
    setcards(orderedSet);
    setTable((previousSet) => ({
      ...previousSet,
      cards: orderedSet.cards,
      decks: orderedSet.decks,
    }));
  }, []);

  return (
    <div className="container">
      <Foundation></Foundation>
      <Tableau table={table} setTable={setTable}></Tableau>
      {cards.hasOwnProperty("decks") && table.decks[10].length > 0 && (
      <Stock table={table} setTable={setTable}></Stock>
      )}
    </div>
  );
}

export default Home;
