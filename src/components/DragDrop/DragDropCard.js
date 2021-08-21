import { IsCompleteSet} from "./CardQueue";
import { CheckTargetRank, CheckSelectedCardMove, TransferCardsToAnother } from "./Move";
import { CardSelection, DeleteCardSelection } from "./CardSelection";
import { CheckAllSetCompleted } from "../Foundation/Foundation";

//For the card is at the cursor level when the user holds the card to drag
export const BeginDrag = (event, card, deck, table, setTable) => {
  event.dataTransfer.setData("text", event.target.id);
  event.dataTransfer.setDragImage(new Image("0", "0"), -10, -10);
  setTable((previousSet) => ({
    ...previousSet,
    x: event.pageX,
    y: event.pageY,
  }));
  if (table.selectedCard === card) {
    return;
  }
  DeleteCardSelection(table, setTable);
  CardSelection(card, deck, null, table, setTable);
};

//Adds css gameOver that will appear as the selected card/cards is dragged
export const OnDrag= (event, table) => {
  var draggameOverCss;
  table.selected.forEach((card) => {
    var childCard = document.getElementById(card.rank + " " + card.suit + " " + card.deck).children[0];
    var directionX = event.pageX - table.x;
    var directionY = event.pageY - table.y;
    if (event.pageX === 0) {
      draggameOverCss = "z-index:9999;transform:translate(0px,0px);display:none;";
    }
    else {
      draggameOverCss =
        "z-index:9999;pointer-events: none; transform: scale(1.05, 1.05) rotate(0deg) translate(" +
        directionX +
        "px, " +
        directionY +
        "px);";
    }
    childCard.style.cssText = draggameOverCss;
  });
};

//Cards that can be the drop target of a dragged card
export const EnterDrag = (table, setTable, card, deck) => {
  var decksOnTable = [...table.decks];
    if (card === "" && table.selectedCard !== "") {
      decksOnTable.forEach((deck) =>
        deck.forEach((tempCard) => (tempCard.isTargetCard = false))
      );
    }
    else if (card !== "" && card !== table.selectedCard) {
      if (table.selected.indexOf(card) !== -1) return;
      var deckIndex = decksOnTable.indexOf(deck);
      var cardIndex = decksOnTable[deckIndex].indexOf(card);
      if (cardIndex !== decksOnTable[deckIndex].length - 1) return;
      decksOnTable.forEach((deck) =>
      deck.forEach((tempCard) => (tempCard.isTargetCard = false)));
    decksOnTable[deckIndex][ cardIndex].isTargetCard = true;
  }
  setTable((previousSet) => ({
    ...previousSet,
    targetCard: card,
    targetDeck: deck,
    decks: decksOnTable,
  }));
};

//Drops the dragged card on the other cards if it is suitable for the set to be placed
export const EndDrag = (card, table, setTable, move, setMove, score, setScore, gameOver, setGameOver) => {
  //If the target card is the card holder then the card holder is removed
  //Drag is allowed for each card
  if (table.targetCard === "") {
    if(CheckSelectedCardMove(table.selectedCard, table.selectedDeck)){
      TransferCardsToAnother(table.targetDeck, table.selectedDeck, table.selectedCard, setTable, table);
      IsCompleteSet(table.targetDeck, table, setTable, score, setScore);
      DeleteCardSelection(table, setTable);
    }
    else{
      DeleteCardSelection(table, setTable);
    }
  }
  //If the target card is not card holder
  if (CheckTargetRank(table.targetCard, table)) {
    if (CheckSelectedCardMove(table.selectedCard, table.selectedDeck)) {
      table.selected.forEach((card) => {
        var child = document.getElementById(
          card.rank + " " + card.suit + " " + card.deck
        ).children[0];
        child.style.cssText = "z-index:0;pointer-events:auto;display:none;";
      });
      TransferCardsToAnother(table.targetDeck,
        table.selectedDeck,
        table.selectedCard,
        setTable,
        table);
      IsCompleteSet(table.targetDeck, table, setTable, score, setScore);
      DeleteCardSelection(table, setTable);
      setMove(move + 1);
      //Five times the number of cards swiped is earned
      setScore(score += (table.selected.length * 5));
      if(CheckAllSetCompleted("foundation")){
        setGameOver(gameOver => !gameOver);
      }
      return;
    } 
    else {
      NotMatchTargetEndDrag(table, setTable);
    }
  } 
  else {
    NotMatchTargetEndDrag(table, setTable);
  }
};

//Adds gameOver if card does not match target when dropped
export const NotMatchTargetEndDrag = (table, setTable) => {
  table.selected.forEach((card) => {
    var child = document.getElementById(
      card.rank + " " + card.suit + " " + card.deck
    ).children[0];
    child.style.cssText = "z-index:0;pointer-events:auto;";
  });
  DeleteCardSelection(table, setTable);
}

