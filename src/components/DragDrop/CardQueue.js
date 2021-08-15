import { isEqual }from "lodash";
import getConstants from "../Common/Constants";
import { getCardRank } from "./CardSelection";

//If the set sequence is complete, remove that set
export const IsExpectedSet = (deck) => {
  let ranks=[]; 
  deck.forEach((card) => {
    ranks.push(getCardRank(card.rank));
  });
  const expectedArray = getConstants.COMPLETE_QUEUE;
  let isOrderSet = isEqual(expectedArray, ranks.slice(-13));
  if (isOrderSet) {
    return ranks.length - 13;
  }
  return false;
};

//Checking whether the set sequence is correct or not
export const IsCompleteSet = (deck, table, setTable) => {
  var len = IsExpectedSet(deck);
  if (len !== false) {
    var tableDecks = [...table.decks];
    var curSetIndex = tableDecks.indexOf(deck);
    tableDecks[curSetIndex].splice(len);
    var hand = table.hands;
    console.log(hand);
    if (tableDecks[curSetIndex].length !== 0) {
      tableDecks[curSetIndex][tableDecks[curSetIndex].length - 1].isClosed = false;
    }
    setTable((previousSet) => ({
      ...previousSet,
      decks: tableDecks,
      hands: hand + 1,
    }));
  }
};