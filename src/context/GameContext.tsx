"use client";

import { TeamColor } from "@/types/Token";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
  useEffect,
} from "react";

type Player = "red" | "blue" | "green" | "yellow";
type SizeType = {
  dice: number;
  board: number;
};
type GameContextType = {
  rollDice: () => void;
  diceNumberValue: React.RefObject<number>;
  currentPlayer: TeamColor;
  setCurrentPlayer: (player: TeamColor) => void;
  nextTurn: () => void;
  playerPositions: Record<TeamColor, number[]>;
  setPlayerPositions: React.Dispatch<
    React.SetStateAction<Record<TeamColor, number[]>>
  >;
  size: SizeType;
  setSize: React.Dispatch<React.SetStateAction<SizeType>>;
  diceDisabled: boolean;
  setDiceDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  win: Player[];
  setWin: React.Dispatch<React.SetStateAction<TeamColor[]>>;
};

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const diceNumberValue = useRef(0);
  const defaultBoardSize = useRef(0.8);
  const [diceDisabled, setDiceDisabled] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("red");
  const [playerPositions, setPlayerPositions] = useState({
    red: [0, 0, 0, 0],
    green: [0, 0, 0, 0],
    blue: [0, 0, 0, 0],
    yellow: [0, 0, 0, 0],
  });
  const [size, setSize] = useState({
    dice: 1.2,
    board: 0.8,
  });
  const [win, setWin] = useState<TeamColor[]>([]);

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      let newBoardSize = 0.8;

      // if (screenWidth < 1025 && screenWidth >= 768) {
      //   newBoardSize = 1;
      //   defaultBoardSize.current=0.5
      // } else if (screenWidth < 768 && screenWidth >= 550) {
      //   newBoardSize = 0.5;
      //   defaultBoardSize.current=0.5
      // } else if (screenWidth < 768) {
      //   newBoardSize = 0.8;
      //   defaultBoardSize.current=0.8
      // }

      if (screenWidth >= 1025) {
        newBoardSize = 1;
        defaultBoardSize.current = 1;
      } else if (screenWidth >= 768) {
        newBoardSize = 1;
        defaultBoardSize.current = 0.5;
      } else if (screenWidth >= 550) {
        newBoardSize = 0.5;
        defaultBoardSize.current = 0.5;
      } else {
        newBoardSize = 1;
        defaultBoardSize.current = 1;
      }

      setSize((prevSize) => ({ ...prevSize, board: newBoardSize }));
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    diceNumberValue.current = randomNumber;
  };

  const nextTurn = () => {
    if (currentPlayer === "red") {
      setCurrentPlayer("yellow");
    } else if (currentPlayer === "yellow") {
      setCurrentPlayer("green");
    } else if (currentPlayer === "green") {
      setCurrentPlayer("blue");
    } else {
      setCurrentPlayer("red");
    }
  };

  return (
    <GameContext.Provider
      value={{
        rollDice,
        diceNumberValue,
        currentPlayer: currentPlayer as TeamColor,
        setCurrentPlayer,
        nextTurn,
        diceDisabled,
        setDiceDisabled,
        playerPositions,
        size,
        setSize,
        setPlayerPositions,
        win,
        setWin,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used inside GameProvider");
  }
  return context;
};

 export function colorGenerator(color: TeamColor): string {
    switch (color) {
      case "red":
        return "#FF0800";
      case "blue":
        return "#0000FF";
      case "green":
        return "#4CBB17";
      case "yellow":
        return "#FFC40C";
      default:
        return "white";
    }
  }