import React from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import { GameTimer } from './Header'


export const CheckForWin = () => {
  GameTimer("pause");
  RemoveAllItemsByClass("cardholder");
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
      data-testid="confetti-testid"
    />
  )
};

//Remove card holders end of the game
export function RemoveAllItemsByClass(removeItemClass){
  let items = document.getElementsByClassName(removeItemClass);
  if(items.length > 0) {
    for(let i=0; i<removeItemClass.length; i++){
      removeItemClass[i].style.display = "none";
    }
  }
}


