
export type PlayerColor = "red" | "green" | "yellow" | "blue";

export interface Token {
  id: string;
  position: number | "home" | "completed";
  player: PlayerColor;
}
