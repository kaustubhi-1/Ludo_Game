export type PlayerColor = "red" | "green" | "yellow" | "blue";

export interface Token {
  id: string;
  position: string | "home" | "completed";
  player: PlayerColor;
}
