import { chunk } from "lodash";
import { shuffle } from "lodash";
import { GetConstants } from "../Common/Constant";

//Creates the distribution of sets on the table
//The first 4 sets will be 6, the next 6 will be 5
//There are a total of 54 cards on the table
export default function TableauPile(shuffleDeck) {
    let cardsOnTable = shuffleDeck.slice(0, 54);
    let decks = chunk(cardsOnTable, 5);
    decks[10] = shuffleDeck.slice(50);
    for (let i = 0; i < GetConstants.TABLEAU_COLUMN_NUM; i++) {
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

//There are 8 of each card in the deck
//Since there are 13 ranks, there are 104 cards in total
//This function shuffles the cards
export function ShuffleDeck() {
    let playingCards = [];
    GetConstants.RANK.forEach((cardRank) => {
        for(let i=0; i <= 7; i++) {
            playingCards.push({
                rank: cardRank,
                suit: GetConstants.SUIT,
                isClosed: true, 
                deck: i,
                isSelected: false,
            });
        }
    })
    let shuffleDeck = shuffle(playingCards);
    return shuffleDeck;
}