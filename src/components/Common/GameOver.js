import React from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'


export const CheckForWin = () => {
  return GetConfetti();
}

//Throw confetti
/* Thanks to @alampros
https://github.com/alampros/react-confetti */
export function GetConfetti  () {
  const { width, height } = useWindowSize();
  return (
      <Confetti
      width={width}
      height={height}
      data-testid="confetti-testid"
    />
  )
};



