function Header(props) {
    const { move } = props;

    return(
        <div class="header">
            <div className="header-left">
                <p>Move: {move}</p>
            </div>
            <div class="header-right">
                <button className="restart-btn" onClick="">
                    <strong>NEW GAME</strong>
                </button>
            </div>
        </div>
    );
}
export default Header;