import React, { useState } from 'react';
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import { GameTimer } from './Header'
import { PopUp } from './Common';
import { GetConstants } from "../Common/Constant";
import "../Common/common.scss";

//Go end of the game
export const GoForWin = (props) => {
  const { score, setScore } = props;
  try{
    GameTimer("pause");
  }
  catch(error){
    console.log(error);
  }
  return (
    <div>
      {GetWinPopUp(score)}
      {GetConfetti()}
    </div>
  )
}

//Open win pop up
export const GetWinPopUp = (score) => {
  const [disable, setDisable] = useState(false);

  return(
    <div>
    {<PopUp
      content={<>
        <div className="popup-win">
          <b>{GetConstants.CELEBRATION_MESSAGE}</b>
          <p>{GetConstants.SCORE} : {score}</p>
          <p><a href="">{GetConstants.KEEP_SHOPPING}</a> {GetConstants.WIN_TEXT}</p>
          <button disabled={disable} onClick={() => {setDisable(true)}}>{GetConstants.RANKING_PLACE}
          </button>
        </div>
      </>}
    />}
  </div>
  )
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
