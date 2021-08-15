import { getCardRank } from "./CardSelection";

// Checks whether the card/cards is movable or not.
export const checkSelectedCardMove = (card, deck) => {
  var tableDecks = [...deck]; 
  var movingCards = tableDecks.slice(deck.indexOf(card));
  let ranks = [];
  movingCards.forEach((curCard) => {
    ranks.push(getCardRank(curCard.rank));
  });
  var curRank = getCardRank(card.rank);
  for (let i = 1; i < ranks.length; i++) {
    if (curRank - ranks[i] !== 1) return false;
    curRank = ranks[i];
  }
  return true;
};

//Checks whether the selected card can be placed on the desired target
export const checkTargetRank = (target, table) => {
  let targetIsFit = getCardRank(target.rank) - getCardRank(table.selectedCard.rank) === 1;
  if (targetIsFit) {
    return true;
  }
  return false;
};

// Function to transfer cards from one deck to another
export const transferCardsToAnother = function (toDeck, fromDeck, fromCard, setTable, table) {
  var tableDecks = [...table.decks];
  var to = tableDecks.indexOf(toDeck);
  var from = tableDecks.indexOf(fromDeck);
  var cardIndex = tableDecks[from].indexOf(fromCard);
  var movedCards = tableDecks[from].splice(cardIndex);

  movedCards.forEach((card) => {
    tableDecks[to].push(card);
  });

  try {
    if (tableDecks[from][tableDecks[from].length - 1].isClosed === true) {
      tableDecks[from][tableDecks[from].length - 1].isClosed = false;
    }
  } catch (error) {
    console.log(error);
  }
  
  setTable((previousSet) => ({
    ...previousSet,
    decks: tableDecks,
  }));
};