import GetConstants from "../Common/Constants";
import { GameTimer } from "../Common/Header";
import ToastMessage from "../Common/ToastMessage";
import { IsCompleteSet } from "./CardQueue";
import { CheckSelectedCardMove, TransferCardsToAnother } from "./Move";

// Returns card rank
export const GetCardRank = (cardRank) => {
  let currentCardRank = GetConstants.CARD_RANKS[cardRank];
  return currentCardRank;
};

//Card selection is preserved
export const CardSelection = (card, deck, cardHolder, table, setTable, score, setScore) => {
  if(document.querySelector('.timer span').textContent === "00:00"){
    GameTimer("start");
  }
  if (cardHolder && table.selectedCard !== "") {
    if (table.selectedCard.rank === "K") {
      TransferCardsToAnother(deck, table.selectedDeck, table.selectedCard, setTable, table);
      IsCompleteSet(deck, table, setTable, score, setScore);
      DeleteCardSelection(table, setTable);
    }
  }

  var tempCard = card;
  // Handling drag and drop method
  if (table.selectedCard === "") {
    if (cardHolder) return;
    if (card.isClosed) {
      return;
    }
    if (CheckSelectedCardMove(card, deck)) {
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
    else{
      ToastMessage.error(GetConstants.MULTICARD_NOT_SEQUENTIAL);
    }
  }
};

//The selected card is deselected
export const DeleteCardSelection = (table, setTable) => { 
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
