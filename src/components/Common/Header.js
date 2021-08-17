function Header(props) {
    const { move, score } = props;

    return(
        <div class="header">
            <div className="header-left">
                <div class="timer">
                    <label>Timer: </label>
                    <span>00:00</span>
                </div>
                <label>Moves: {move}</label>
            </div>
            <div className="header-center">
                <label>Score: {score}</label>
            </div>
            <div class="header-right">
                <button className="restart-btn" onClick={() => "playAgain()"}>
                    <strong>NEW GAME</strong>
                </button>
            </div>
        </div>
    );
}
export default Header;