import { atom } from "recoil";

// Players currently in the game (colors)
export const currentPlayersListState = atom({
  key: "currentPlayersListState",
  default: ["palegreen", "yellow","red","blue"],
});

// Current player turn
export const currentPlayerState = atom({
  key: "currentPlayerState",
  default: "palegreen",
});

// Dice state
export const currentDiceState = atom({
  key: "currentDiceState",
  default: { num: 0, isLocked: false, lastRolledBy: null },
});

// Coin positions for each player’s coins
// For simplicity: Each player has 2 coins initially at "home"
export const allCoinState = atom({
  key: "allCoinState",
  default: {
    palegreen: { p0: "home", p1: "home" },
    yellow: { y0: "home", y1: "home" },
    red: { r0: "home", r1: "home" },
    blue: { b0: "home", b1: "home" },
  },
});
