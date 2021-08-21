import React from "react";
import "./Tableau.scss";
import Card from "../Cards/Card";
import CardHolder from "../Cards/CardHolder";
import { CardSelection } from "../DragDrop/CardSelection";
import { BeginDrag, OnDrag, EnterDrag, EndDrag } from "../DragDrop/DragDropCard";

//Where cards are lined up in sets on the table
function Tableau(props) {
    
    const { 
        table, setTable, 
        move, setMove, 
        score, setScore, 
        gameOver, setGameOver
    } = props;

    return (
        <div className="tableau-container">
            {table.decks.slice(0 ,10).map((deck, index) => (
                <React.Fragment>
                {deck.length === 0 ? (
                    <div id="holder" key={index + "0"} onClick={() => {
                        CardSelection("", deck, true, table, setTable, score, setScore);
                      }}
                      onDragEnter={(e) => {
                        EnterDrag(table, setTable, "", deck);
                      }}
                    >
                      <CardHolder key={index + " 1"} deck={deck} />
                    </div>
            ) : (
                <div key={index + " 2"} deck={deck}>
                {deck.map((card, key) => (
                <div id={card.rank + " " + card.suit + " " + card.deck}
                className="card-wrapper"
                draggable={true}
                onDragStart={(e) => { BeginDrag(e, card, deck, table, setTable); }}
                onDrag={(e) => { OnDrag(e, table); }}
                onDragEnter={(e) => { EnterDrag(table, setTable, card, deck); }}
                onDragEnd={(e) => { EndDrag(card, table, setTable, move, setMove, score, setScore, gameOver, setGameOver); }}>
                    <Card key={card.rank + " " + card.suit + " " + card.deck} card={card}
                    isSelected={card.isSelected} isClosed={card.isClosed}/>
                    </div>
                ))}
            </div>
            )}
            </React.Fragment>
            ))}
        </div>
    );
}
export default Tableau;
