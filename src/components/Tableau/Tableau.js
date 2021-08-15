import React from "react";
import "./Tableau.scss";
import Card from "../Cards/Card";
import { beginDrag, onDrag, enterDrag, endDrag } from "../DragDrop/DragDropCard";

//Where cards are lined up in sets on the table
function Tableau(props) {
    
    const { table, setTable } = props;

    return (
        <div className="tableau-container">
            { table.decks.slice(0, 10).map((deck, index) =>
            <div key={index + " 2"} deck={deck}>
                {deck.map((card, key) => (
                <div id={card.rank + " " + card.suit + " " + card.deck}
                className="card-wrapper"
                draggable={true}
                onDragStart={(e) => { beginDrag(e, card, deck, table, setTable); }}
                onDrag={(e) => { onDrag(e, table); }}
                onDragEnter={(e) => { enterDrag(table, setTable, card, deck); }}
                onDragEnd={(e) => { endDrag(card, table, setTable); }}>
                    <Card key={card.rank + " " + card.suit + " " + card.deck} card={card}
                    isSelected={card.isSelected} isClosed={card.isClosed}/>
                    </div>
                ))}
            </div>
            )
        }
        </div>
    );
}
export default Tableau;