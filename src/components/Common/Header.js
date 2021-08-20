import { CompleteElement } from "../Foundation/Foundation";
import ShuffleDeck from "../Tableau/Shuffle";
import TableauPile from "../Tableau/TableauPile";

//Global variables
let clock = 0;
let time = 0;

function Header(props) {
    const { setTable, setCards, move, setMove, score, setScore } = props;

    return(
        <div className="header" data-testid="header-testid">
            <div className="header-left">
                <div className="timer">
                    <label>Timer: </label>
                    <span>00:00</span>
                </div>
                <label>Moves: {move}</label>
            </div>
            <div className="header-center">
                <label>Score: {score}</label>
            </div>
            <div className="header-right">
                <button className="restart-btn" onClick={() =>{ RestartGame(setTable, setCards, setMove, setScore); }}>
                    <strong>NEW GAME</strong>
                </button> 
            </div>
        </div>
    );
}
export default Header;

export const GameTimer = (action) => {
    var timer = document.querySelector('.timer span');
    let minutes= 0;
    let seconds= 0;
    if(action === "start"){
        
        clock = setInterval(function() {
            time++;
            //Parse minutes and seconds
            minutes = parseInt(time / 60, 10);
            seconds = parseInt(time % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            //Output
            timer.textContent = minutes + ':' + seconds;
        }, 1000);
    }
    else if(action === "stop"){
        clearInterval(clock);
        timer.textContent = "00:00";
        time = 0;
    }
    return;
}

export const RestartGame = (setTable, setCards, setMove, setScore) => {
    //Table clear
    setTable((previousSet) => ({
      ...previousSet,
      cards: [],
      decks: [],
    }));

    //Shuffle cards and set table shuffled cards
    const shuffledCards = ShuffleDeck();
    const orderedSet = TableauPile(shuffledCards);
    setCards(orderedSet);
    setMove(0);
    setScore(0);
    GameTimer("stop");
    CompleteElement("foundation", true);
    setTable((previousSet) => ({
      ...previousSet,
      cards: orderedSet.cards,
      decks: orderedSet.decks,
    }));
}