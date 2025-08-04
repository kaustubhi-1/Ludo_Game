"use client";
import React, { useState, useEffect } from "react";
import trackLayout from "@/utils/TrackLayout";
import { useGame } from "../context/GameContext";
import Square from './Square';
import Home from "./Home";
import Piece from "./Piece";
// import '../styles/Board.css';

const Boards = () => {
  const { playerPositions, currentPlayer } = useGame();
  const [layout, setLayout] = useState(trackLayout);
  // console.log(playerPositions)
  // console.log(currentPlayer)

  useEffect(() => {
    
    const updatedLayout = { ...trackLayout };
  // console.log(updatedLayout)
    
    Object.values(updatedLayout).forEach((value) => {
      value.Piece = [];
    });

    // console.log(Object.values(updatedLayout))
    Object.entries(playerPositions).forEach(([color, positions]) => {
      positions.forEach((position, index) => {
        if (
          position !== 0 &&
          position !== 106 &&
          position !== 206 &&
          position !== 306 &&
          position !== 406
        ) {
          updatedLayout[position].Piece.push(`${color}-${index}`);
        }
      });
    });

    setLayout(updatedLayout);
  }, [playerPositions, currentPlayer]);

  return (
    // <div id="board" style={{transform: `scale(${size.board})`}}>
    <div id="board">
      {/* Render Home components for each color */}
      {(["red", "green", "yellow", "blue"] as const).map((color) => (
        <Home key={color} color={color}>
          {playerPositions[color].map((position, index) => {
            if (position === 0) {
              return (
                <Piece key={index} id={`${color}-${index}`} color={color} />
              );
            }
            return null;
          })}
        </Home>
      ))}
      <Square />
      {Object.entries(layout).map(([key, value]) => {
        const numberOfPieces = value.Piece.length;
        const childClassName = numberOfPieces > 1 ? "multiple-pieces" : "";

        return (
          <div
            key={key}
            className={`${value.type} track-${key} ${childClassName}`}
          >
            
            {/* {key} */}
            {value.Piece.map((piece, i) => (
              <Piece key={i} color={piece.split("-")[0] as any} id={piece} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Boards;
