import React, { useState } from 'react';
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import { GameTimer } from './Header'
import { ToastMessage } from './Common';
import { GetConstants } from "../Common/Constant";
import "../Common/common.scss";

//Go end of the game
export const GoForWin = (props) => {
  let userProfit;
  const { score, setScore } = props;
  try{
    GameTimer("pause");
    document.getElementById("background-id").classList.add("background-win"); 
    userProfit = CalculateProfit(score);
  }
  catch(error){
    console.log(error);
  }
  return (
    <div>
      {GetWinPopUp(score, userProfit)}
      {GetConfetti()}
    </div>
  )
}

//Open win pop up
export const GetWinPopUp = (score, userProfit) => {
  const [disable, setDisable] = useState(false);

  return(
    <div>
    {<PopUp
      content={<>
        <div className="popup-win">
          <b>{GetConstants.CELEBRATION_MESSAGE}</b>
          <p>{GetConstants.SCORE} : {score}</p>
          <p>{GetConstants.PROFIT_MESSAGE} {userProfit} {GetConstants.CURRENCY}!</p>
          <button disabled={disable} onClick={() => {
            setDisable(true);
            ToastMessage.success(GetConstants.SUCCESS_OPERATION);
          }}>{GetConstants.ADD_TRENDYOL_WALLET}</button>
        </div>
      </>}
    />}
  </div>
  )
}

//Reusable pop up
export const PopUp = props => {
  return (
    <div className="popup-box" id="win-popup">
      <div className="box">
        {props.content}
      </div>
    </div>
  );
}

//The amount to be added to the Trendyol wallet is calculated over points
export const CalculateProfit = (score) => {
  let userProfit = score / 500;
  return userProfit;
}

//Remove card holders end of the game
export function RemoveAllItemsByClass(removeItemClass){
  let items = document.getElementsByClassName(removeItemClass);
  if(items.length > 0) {
    for(let i=0; i<items.length; i++){
      items[i].style.display = "none";
    }
  }
}

//Throw the confetti
/* Thanks to @alampros
https://github.com/alampros/react-confetti */
export function GetConfetti() {
  const { width, height } = useWindowSize();
  return (
      <Confetti
      width={width}
      height={height}
      numberOfPieces="800"
    />
  )
};
