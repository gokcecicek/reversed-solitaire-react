import { shuffle } from "lodash";
import GetConstants from "../Common/Constants";

//There are 8 of each card in the deck
//Since there are 13 ranks, there are 104 cards in total
//This function shuffles the cards
function ShuffleDeck() {
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
export default ShuffleDeck;