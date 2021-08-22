import { isEqual }from "lodash";
import "../Foundation/Foundation.scss";
import { GetConstants, ToastMessage } from "../Common/Common";
import { GetCardRank } from "./CardSelection";
import { CompleteElement } from "../Foundation/Foundation";

//If the set sequence is complete, remove that set
export const IsExpectedSet = (deck) => {
  let ranks=[]; 
  deck.forEach((card) => {
    ranks.push(GetCardRank(card.rank));
  });
  const expectedArray = GetConstants.COMPLETE_QUEUE;
  let isOrderSet = isEqual(expectedArray, ranks.slice(-13));
  if (isOrderSet) {
    return ranks.length - 13;
  }
  return false;
};

//Checking whether the set sequence is correct or not
export const IsCompleteSet = (deck, table, setTable, score, setScore) => {
  var expectedSet = IsExpectedSet(deck);
  if (expectedSet !== false) {
    CompleteElement("foundation", false);
    var tableDecks = [...table.decks];
    var curSetIndex = tableDecks.indexOf(deck);
    tableDecks[curSetIndex].splice(expectedSet);
    var hand = table.hands;
    if (tableDecks[curSetIndex].length !== 0) {
      tableDecks[curSetIndex][tableDecks[curSetIndex].length - 1].isClosed = false;
    }
    setTable((previousSet) => ({
      ...previousSet,
      decks: tableDecks,
      hands: hand + 1,
    }));
    //50 points are earned if a set is completed
    setScore(score += 30);
    ToastMessage.success(GetConstants.SET_COMPLETED);
  }
};


