import React, { useEffect, useState } from "react";
import "./common.scss";
import Stock from "../Stock/Stock";
import TableauPile, { ShuffleDeck } from "../Tableau/TableauPile";
import Tableau from "../Tableau/Tableau";
import Foundation from "../Foundation/Foundation";
import Header from "./Header";
import { GoForWin } from "./GameOver";
import { InfoPopUp } from "./Common";

function Home() {

  const [cards, setCards] = useState({});
  const [move, setMove] = useState([]);
  const [score, setScore] = useState([]);
  const [gameOver, setGameOver] = useState(false);
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
    setCards(orderedSet);
    setMove(0);
    setScore(0);
    setGameOver(false);
    setTable((previousSet) => ({
      ...previousSet,
      cards: orderedSet.cards,
      decks: orderedSet.decks,
    }));
  }, []);

  return (
    <div>
      <div className="background" id="background-id" data-testid="background-testid">
        <Header 
        setTable={setTable} setCards={setCards} 
        move={move} setMove={setMove}
        score={score} setScore={setScore}
        gameOver={gameOver} setGameOver={setGameOver}>
        </Header>
        <div className="container">
          <Foundation></Foundation>
          <Tableau 
          table={table} setTable={setTable}
          move={move} setMove={setMove} 
          score={score} setScore={setScore}
          gameOver={gameOver} setGameOver={setGameOver}>
          </Tableau>
          {cards.hasOwnProperty("decks") && table.decks[10].length > 0 && (
          <Stock 
          table={table} setTable={setTable} 
          move={move} setMove={setMove}
          score={score} setScore={setScore}
          gameOver={gameOver} setGameOver={setGameOver}>
          </Stock>)}
        </div>
        <InfoPopUp></InfoPopUp>
      </div>
      {gameOver === true && <GoForWin score={score} setScore={setScore}></GoForWin>}
    </div>
  );
}


export default Home;
