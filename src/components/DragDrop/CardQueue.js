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
    CompleteFoundation(); //burası yeni
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

export const CompleteFoundation = () => {
  var foundation = document.getElementsByClassName("foundation");
  console.log(foundation);
  var childFoundations = foundation[0].children;
  console.log(childFoundations);
  if(childFoundations.length > 0){
    for(let i=0; i<childFoundations.length; i++){
      let isFoundationFill = childFoundations[i].classList.contains("completed");
      if(!isFoundationFill) {
        return childFoundations[i].classList.add("completed");
      }
    }
  }
};