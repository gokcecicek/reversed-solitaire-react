import { IsCompleteSet} from "./CardQueue";
import { checkTargetRank, checkSelectedCardMove, transferCardsToAnother } from "./Move";
import { cardSelection, deleteCardSelection } from "./CardSelection";

//For the card is at the cursor level when the user holds the card to drag
export const beginDrag = (event, card, deck, table, setTable) => {
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
  deleteCardSelection(table, setTable);
  cardSelection(card, deck, null, table, setTable);
};

//Adds css animation that will appear as the selected card/cards is dragged
export const onDrag = (event, table) => {
  var dragAnimationCss;
  table.selected.forEach((card) => {
    var childCard = document.getElementById(card.rank + " " + card.suit + " " + card.deck).children[0];
    var directionX = event.pageX - table.x;
    var directionY = event.pageY - table.y;
    if (event.pageX === 0) {
      dragAnimationCss = "z-index:9999;transform:translate(0px,0px);display:none;";
    }
    else {
      dragAnimationCss =
        "z-index:9999;pointer-events: none; transform: scale(1.05, 1.05) rotate(0deg) translate(" +
        directionX +
        "px, " +
        directionY +
        "px);";
    }
    childCard.style.cssText = dragAnimationCss;
  });
};

//Cards that can be the drop target of a dragged card
export const enterDrag = (table, setTable, card, deck) => {
  if(!card.isClosed) {
    var decksOnTable = [...table.decks];
    if (card === "" && table.selectedCard !== "") {
      decksOnTable.forEach((deck) =>
        deck.forEach((tempCard) => (tempCard.isHighlighted = false))
      );
    }
    else if (card !== "" && card !== table.selectedCard) {
      if (table.selected.indexOf(card) !== -1) return;
      var deckIndex = decksOnTable.indexOf(deck);
      var cardIndex = decksOnTable[deckIndex].indexOf(card);
      if (cardIndex !== decksOnTable[deckIndex].length - 1) return;
      decksOnTable.forEach((deck) =>
      deck.forEach((tempCard) => (tempCard.isHighlighted = false)));
    decksOnTable[deckIndex][ cardIndex].isHighlighted = true;
  }
  setTable((previousSet) => ({
    ...previousSet,
    highlightedCard: card,
    highlightedDeck: deck,
    decks: decksOnTable,
  }));
  }
};

//Drops the dragged card on the other cards if it is suitable for the set to be placed
export const endDrag = (card, table, setTable) => {
  if (checkTargetRank(table.highlightedCard, table)) {
    if (checkSelectedCardMove(table.selectedCard, table.selectedDeck)) {
      table.selected.forEach((card) => {
        var child = document.getElementById(
          card.rank + " " + card.suit + " " + card.deck
        ).children[0];
        child.style.cssText = "z-index:0;pointer-events:auto;display:none;";
      });
      transferCardsToAnother(table.highlightedDeck,
        table.selectedDeck,
        table.selectedCard,
        setTable,
        table);
      IsCompleteSet(table.highlightedDeck, table, setTable);
      deleteCardSelection(table, setTable);
      return;
    } else {
      table.selected.forEach((card) => {
        var child = document.getElementById(
          card.rank + " " + card.suit + " " + card.deck
        ).children[0];
        child.style.cssText = "z-index:0;pointer-events:auto;";
      });
      deleteCardSelection(table, setTable);
    }
  } else {
    table.selected.forEach((card) => {
      var child = document.getElementById(
        card.rank + " " + card.suit + " " + card.deck
      ).children[0];
      child.style.cssText = "z-index:0;pointer-events:auto;";
    });
    deleteCardSelection(table, setTable);
  }
};


