// utils/checkDiceOutcome.ts
import { RefObject } from "react";
import { TeamColor } from "@/types/Token";

export function checkDiceOutcome({
  diceNumber,
  currentPlayer,
  playerPositions,
  nextTurn,
  diceNumberRef,
  setDiceDisabled,
}: {
  diceNumber: number;
  currentPlayer: TeamColor;
  playerPositions: Record<TeamColor, number[]>;
  nextTurn: () => void;
  diceNumberRef:  RefObject<number>;
  setDiceDisabled: (value: boolean) => void;
}) {
  const allColors: TeamColor[] = ["red", "yellow", "green", "blue"];
  const winTrack = 100 * (allColors.indexOf(currentPlayer) + 1);

  const allWon = playerPositions[currentPlayer].every((pos) => pos === winTrack + 6);
  if (allWon) {
    nextTurn();
    return;
  }

  const allAtHome = playerPositions[currentPlayer].every((pos) => pos === 0);
  if (allAtHome && diceNumber !== 6) {
    setTimeout(() => {
      diceNumberRef.current = 0;
      nextTurn();
      setDiceDisabled(false);
    }, 1200);
    return;
  }

  let canMove = false;
  for (let pos of playerPositions[currentPlayer]) {
    if (pos === 0 && diceNumber === 6) {
      canMove = true;
      break;
    }

    if (pos > 0 && pos < winTrack + 6) {
      const futurePos = pos + diceNumber;
      if (futurePos <= winTrack + 6) {
        canMove = true;
        break;
      }
    }
  }

  if (!canMove) {
    setTimeout(() => {
      diceNumberRef.current = 0;
      nextTurn();
      setDiceDisabled(false);
    }, 1200);
  }
}
