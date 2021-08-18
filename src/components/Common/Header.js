function Header(props) {
    const { move, score } = props;

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
                {/* <button className="restart-btn" onClick={() => "playAgain()"}>
                    <strong>NEW GAME</strong>
                </button> */}
            </div>
        </div>
    );
}
export default Header;