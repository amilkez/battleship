// gameboard factory
// * Gameboards should be able to place ships at specific coordinates

// ! DON'T RELY ON CLG'S OR DOM TO MAKE SURE THE CODE IS DOING WHAT I EXPECT IT TO DO

// TODO receiveAttack(x,y) func that takes a pair of coordinates
// ? determines whether or not the attack hit a ship
// ? send hit func to the correct ship
// ? if not hit records coordinates of the missed shot

// ! gameboards keep track of missed attack to display them properly

// ! gameboard should be able to report whether or not all of the ships have been sunk

import { createShip } from './ship';

const createGameboard = () => {
  const gameBoard = [];
  const missedAttacks = [];
  let areAllShipsSunk = false;

  for (let i = 0; i < 10; i++) {
    const row = [];
    for (let j = 0; j < 10; j++) {
      row.push([j]);
    }
    gameBoard.push(row);
  }

  const placeShip = (x, y, length) => {
    const ship = createShip(length);
    gameBoard.forEach(column, i) => {
      
    }
  };

  const receiveAttack = (x, y) => {
    gameBoard.forEach((column, i) => {
      if (i === x) {
        column[y] = 'hit';
      }
    });
  };

  return { receiveAttack, areAllShipsSunk };
};
