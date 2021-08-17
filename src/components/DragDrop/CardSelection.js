import getConstants from "../Common/Constants";
import GameTimer from "../Common/GameTimer";
import { IsCompleteSet } from "./CardQueue";
import { checkSelectedCardMove, transferCardsToAnother } from "./Move";

// Returns card rank
export const getCardRank = (cardRank) => {
  let currentCardRank = getConstants.CARD_RANKS[cardRank];
  return currentCardRank;
};

//Card selection is preserved
export const cardSelection= (card, deck, cardHolder, table, setTable) => {
  GameTimer("start");
  if (cardHolder && table.selectedCard !== "") {
    if (table.selectedCard.rank === "K") {
      transferCardsToAnother(deck, table.selectedDeck, table.selectedCard, setTable, table);
      IsCompleteSet(deck, table, setTable);
      deleteCardSelection(table, setTable);
    }
  }

  var tempCard = card;
  // Handling drag and drop method
  if (table.selectedCard === "") {
    if (cardHolder) return;
    if (card.isClosed) {
      return;
    }
    if (checkSelectedCardMove(card, deck)) {
      tempCard.isSelected = true;
      var tableDecks = [...deck];
      var selected = tableDecks.slice(deck.indexOf(card));
      selected.forEach((curCard) => {
        curCard.isSelected = true;
      });
      setTable((previousSet) => ({
        ...previousSet,
        selected: selected,
        selectedCard: card,
        selectedDeck: deck,
      }));
    }
  }
};

//The selected card is deselected
export const deleteCardSelection = (table, setTable) => { 
  if (table.selectedCard !== "") {
    var decks = [...table.decks];
    for (let i = 0; i < decks.length; i++) {
      for (let j = 0; j < decks[i].length; j++) {
        decks[i][j].isSelected = false;
      }
    }
    setTable((previousSet) => ({
      ...previousSet,
      selected: [],
      decks: decks,
      selectedCard: "",
      selectedDeck: "",
    }));
  }
};
