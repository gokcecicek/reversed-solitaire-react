import { GameTimer } from "../Common/Header";
import "../Cards/Card.scss";
import { IsCompleteSet } from "../DragDrop/CardQueue";
import { checkAllSetCompleted } from "../Foundation/Foundation";

//The face of the dealt card is turned over
//Separates 10 cards from the remaining deck and push into each set
function WastePile(table, setTable, move, setMove, score, setScore, gameOver, setGameOver) {
    if(document.querySelector('.timer span').textContent === "00:00"){
        GameTimer("start");
    }
    var remainingDeck = table.decks[10];
    if(remainingDeck.length > 0) {
        var currentDeck = [...table.decks];
        var deckSlice = remainingDeck.slice(0, 10);
        for(let i=0; i <= currentDeck.length - 2; i++) {
            currentDeck[i].push(deckSlice[i]);
            currentDeck[i][currentDeck[i].length-1].isClosed=false; 
        }
        remainingDeck.splice(0, 10); 
        setMove(move + 1);
        currentDeck.forEach((deck) => {
            IsCompleteSet(deck, table, setTable, score, setScore)
        });
        if(checkAllSetCompleted("foundation")){
            setGameOver(gameOver => !gameOver);
        }
        return (
            setTable((previousSet) => ({
                ...previousSet,
                decks: currentDeck,
            })) 
        );
        //check set is complete
        //check for win
    }
}
export default WastePile;