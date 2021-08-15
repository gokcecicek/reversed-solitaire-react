import { chunk } from "lodash";
import getConstants from '../Common/Constants';

//Creates the distribution of sets on the table
//The first 4 sets will be 6, the next 6 will be 5
//There are a total of 54 cards on the table
function TableauPile(shuffleDeck) {
    let cardsOnTable = shuffleDeck.slice(0, 54);
    let decks = chunk(cardsOnTable, 5);
    decks[10] = shuffleDeck.slice(50);
    for (let i = 0; i < getConstants.TABLEAU_COLUMN_NUM; i++) {
        if(i < 4) {
            decks[i].push(decks[10][decks[10].length - 1]);
            decks[10].pop();
        }
        decks[i][decks[i].length - 1].isClosed = false;
    }
    return {
        decks: decks,
        cards: shuffleDeck,
    };
}

export default TableauPile;