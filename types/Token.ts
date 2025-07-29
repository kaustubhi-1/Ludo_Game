export type TeamColor = 'blue' | 'yellow' | 'red' | 'green';

export interface Token {
  id: string;
  position: string | "home" | "completed";
  player: TeamColor;
}

export type HomePathEntries = Record<TeamColor, string[]>;

export interface Piece {
  id: string;
  team: TeamColor;
  position: string; 
  status: 0 | 1; // 0 = locked, 1 = unlocked
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

