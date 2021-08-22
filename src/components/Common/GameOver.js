import React from 'react';
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import { GameTimer } from './Header'
import "../Common/common.scss";

export const GoForWin = (props) => {
  const { score, setScore } = props;
  GameTimer("pause");
  let userProfit = CalculateProfit(score);
  return (
    <div>
      {GetPopUp(score, userProfit)}
      {GetConfetti()}
    </div>
  )
}

export const GetPopUp = (score, userProfit) => {
  return(
    <div>
    {<PopUp
      content={<>
        <b>Congratulations!</b>
        <p>Score: {score}</p>
        <p>You won {userProfit} TL!</p>
        <button>Add to my Trendyol wallet</button>
      </>}
    />}
  </div>
  )
}

export const CalculateProfit = (score) => {
  let userProfit = score / 500;
  return userProfit;
}

//Throw confetti
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

//Remove card holders end of the game
export function RemoveAllItemsByClass(removeItemClass){
  let items = document.getElementsByClassName(removeItemClass);
  if(items.length > 0) {
    for(let i=0; i<items.length; i++){
      items[i].style.display = "none";
    }
  }
}

export const PopUp = props => {
  return (
    <div className="popup-box" id="win-popup">
      <div className="box">
        {props.content}
      </div>
    </div>
  );
}
