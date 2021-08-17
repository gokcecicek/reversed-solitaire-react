import { isEqual }from "lodash";
import "../Foundation/Foundation.scss";
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
    ranks.length += - 13;
    CompleteFoundation();
    return true;
  }
  return false;
};

//Checking whether the set sequence is correct or not
export const IsCompleteSet = (deck, table, setTable, score, setScore) => {
  var expectedSet = IsExpectedSet(deck);
  if (expectedSet) {
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
    console.log("son set");
    //50 points are earned if a set is completed
    setScore(score += 50);
  }
};

export const CompleteFoundation = () => {
  var foundation = document.getElementsByClassName("foundation");
  var childFoundations = foundation[0].children;
  if(childFoundations.length > 0){
    for(let i=0; i<childFoundations.length; i++){
      let isFoundationFill = childFoundations[i].classList.contains("completed");
      if(!isFoundationFill) {
        return childFoundations[i].classList.add("completed");
      }
    }
  }
};