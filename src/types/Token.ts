import { RefObject } from "react";

export type TeamColor = 'red' | 'green' | 'yellow' | 'blue';

export interface Token {
  id: string;
  position: string | "home" | "completed";
  player: TeamColor;
}
export type PlayerPositions = {
  [key in TeamColor]: number[];
};

export type HomePathEntries = Record<TeamColor, string[]>;

export interface Piece {
  id: string;
  team: TeamColor;
  position: string; 
  status: 0 | 1; 
  score: number;
  homePathEntry: string; 
  gameEntry: string;     
  initialPosition: string; 
}

export interface PlayerTurn {
  team: TeamColor;
  hasPlayed: boolean;
  hasBonus: boolean;
  hasTurn: boolean;
  score: number;
}

// You can keep adding more as your logic grows
export type BoardProps = {
  numPvP: number;
};
export interface DiceProps {
  onRoll: (value: number) => void;

}

export type GameContextType = {
  currentPlayer: TeamColor;
  setCurrentPlayer: (player: TeamColor) => void;
  nextTurn: () => void;
  playerPositions: Record<TeamColor, number[]>;
  setPlayerPositions: React.Dispatch<React.SetStateAction<Record<TeamColor, number[]>>>;
};
export interface DiceProps {
  onRoll: (value: number) => void;
  diceNumberRef: RefObject<number>;
  nextTurn: () => void;
  currentPlayer: TeamColor;
  playerPositions: Record<TeamColor, number[]>;
  setDiceDisabled: (val: boolean) => void;
  color:TeamColor
}
export interface Track {
  type: string;
  Piece: string[]; 
}
export type WinCheckFn = (
  color: TeamColor,
  newPosition: number,
  nextTurn: () => void,
  playerPositions: PlayerPositions
) => boolean | undefined;

