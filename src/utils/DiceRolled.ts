import React from "react";
import { TeamColor } from "../types/Token";

type PlayerPositions = Record<TeamColor, number[]>;
type DiceRolledProps = {
  diceNumberValue: React.MutableRefObject<number>;
  nextTurn: () => void;
  currentPlayer: TeamColor;
  playerPositions: PlayerPositions;
  setDiceDisabled: (value: boolean) => void;
};

const DiceRolled = (
  diceNumberValue: React.MutableRefObject<number>,
  nextTurn: () => void,
  currentPlayer: TeamColor,
  playerPositions: PlayerPositions,
  setDiceDisabled: (value: boolean) => void
) => {
  const diceNumber = diceNumberValue.current;

  const checkAllPositions = (positions: number[], value: number): boolean => {
    return positions.every((position) => position === value);
  };

  // if dice is 6 and all are at home track.
  if (diceNumber === 6 && playerPositions[currentPlayer].every((position) => position > 100)) {
    setTimeout(() => {
      diceNumberValue.current = 0;
      nextTurn();
      setDiceDisabled(false);
    }, 1500);
  }

  // Check if no valid moves are possible → skip turn
  const checkAllPossibilities = (
    diceNumber: number,
    currentPlayer: TeamColor,
    diceNumberValue: React.MutableRefObject<number>,
    nextTurn: () => void,
    setDiceDisabled: (value: boolean) => void
  ) => {
    if (diceNumber !== 0) {
      const allPlayers: TeamColor[] = ["red", "yellow", "green", "blue"];
      const winTrack = 100 * (allPlayers.indexOf(currentPlayer) + 1);
      let isTurn = true;

      if (diceNumber === 6) {
        isTurn = false;
      }

      for (let position of playerPositions[currentPlayer]) {
        if (position < winTrack && position !== 0) {
          isTurn = false;
          break;
        } else if (
          position > winTrack &&
          position < winTrack + 6 &&
          position + diceNumber <= winTrack + 6
        ) {
          isTurn = false;
          break;
        }
      }

      if (isTurn) {
        setTimeout(() => {
          diceNumberValue.current = 0;
          nextTurn();
          setDiceDisabled(false);
        }, 1500);
      }
    }
  };

  checkAllPossibilities(diceNumber, currentPlayer, diceNumberValue, nextTurn, setDiceDisabled );

  const winningPositions: Record<TeamColor, number> = {
    red: 106,
    blue: 406,
    green: 306,
    yellow: 206,
  };

  if (checkAllPositions(playerPositions[currentPlayer], winningPositions[currentPlayer])) {
    nextTurn();
  }
};

export default DiceRolled;
