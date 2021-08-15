//Separates 10 cards from the remaining deck and push into each set
//The face of the dealt card is turned over
function WastePile(table, setTable) {
    var remainingDeck = table.decks[10];
    if(remainingDeck.length > 0) {
        var currentDeck = [...table.decks];
        var deckSlice = remainingDeck.slice(0, 10);
        for(let i=0; i <= currentDeck.length - 2; i++) {
            currentDeck[i].push(deckSlice[i]);
            currentDeck[i][currentDeck[i].length-1].isClosed=false; 
        }
        remainingDeck.splice(0, 10); 
        return (
            setTable((previousSet) => ({
                ...previousSet,
                decks: currentDeck,
            })) //what if set completed?
        );
    }
}

export default WastePile;