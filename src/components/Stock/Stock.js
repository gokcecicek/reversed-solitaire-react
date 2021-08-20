import React from "react";
import getWastePileToDeck from "../Stock/WastePile";

//Function that serves to deal cards for each set on the table
function Stock(props) {

    const { table, setTable, move, setMove, score, setScore, gameOver, setGameOver } = props;
        return (
            <div id="stockCard" onClick={(stockEvent) => { 
                getWastePileToDeck(table, setTable, move, setMove, score, setScore, gameOver, setGameOver)}} className="card card-closed card-stock">
            </div>
        );
}
export default Stock;
