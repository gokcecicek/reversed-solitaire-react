import React from "react";
import getWastePileToDeck from "../Stock/WastePile";

//Function that serves to deal cards for each set on the table
function Stock(props) {

    const { table, setTable, move, setMove } = props;
        return (
            <div onClick={(stockEvent) => { getWastePileToDeck(table, setTable, move, setMove)}} className="card card-closed card-stock">
            </div>
        );
}
export default Stock;
