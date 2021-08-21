import React from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import { GameTimer } from './Header'


export const CheckForWin = () => {
  GameTimer("pause");
  return GetConfetti();
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


