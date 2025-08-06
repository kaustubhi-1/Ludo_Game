import React, { useEffect, useRef } from "react";
import { useGame } from "../context/GameContext";
import Piece from "./Piece";
import { TeamColor } from "@/types/Token";

const Square = () => {
  const { playerPositions } = useGame();

     const playedWinTokensRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const colors: TeamColor[] = ["red", "yellow", "green", "blue"];
    const winPositions = {
      red: 106,
      yellow: 206,
      green: 306,
      blue: 406,
    };

    colors.forEach((color) => {
      playerPositions[color].forEach((position, index) => {
        const tokenId = `${color}-${index}`;
        if (position === winPositions[color] && !playedWinTokensRef.current.has(tokenId)) {
          const audio = new Audio("/wintoken.mp3");
          audio.volume = 0.5;
          audio.currentTime = 0;
          audio.play().catch((err) => {
            console.warn("Win audio failed:", err);
          });

          playedWinTokensRef.current.add(tokenId); // Mark this token as already sounded
        }
      });
    });
  }, [playerPositions]);

  const redWinner = playerPositions["red"].map((position, index) => {
    return position === 106 ? (
      <Piece key={index} id={`red-${index}`} color={"red"} />
    ) : null;
  });

  const yellowWinner = playerPositions["yellow"].map((position, index) => {
    return position === 206 ? (
      <Piece key={index} id={`yellow-${index}`} color={"yellow"} />
    ) : null;
  });

  const greenWinner = playerPositions["green"].map((position, index) => {
    return position === 306 ? (
      <Piece key={index} id={`green-${index}`} color={"green"} />
    ) : null;
  });

  const blueWinner = playerPositions["blue"].map((position, index) => {
    return position === 406 ? (
      <Piece key={index} id={`blue-${index}`} color={"blue"} />
    ) : null;
  });

  return (
    <div id="win-win" className="square">
      <div className="win-containers">
        <div className="win-color yellow-win">
          <div className="winner-collecting wc-yellow">{yellowWinner}</div>
        </div>
        <div className="win-color green-win">
          <div className="winner-collecting wc-green">{greenWinner}</div>
        </div>
        <div className="win-color red-win">
          <div className="winner-collecting wc-red">{redWinner}</div>
        </div>
        <div className="win-color blue-win">
          <div className="winner-collecting wc-blue">{blueWinner}</div>
        </div>
      </div>
    </div>
  );
};

export default Square;
