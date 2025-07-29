'use client'
import React, { useEffect, useRef, useState } from 'react'
import Dice from './Dice'
import { BoardProps, TeamColor, Token } from '../../types/Token';
import { useBoardRefs } from '@/hooks/useBoardRefs';
import { playerPaths } from '@/data/dataConfig';
import { tokenImages } from '@/config/constants';


const initialTokens: Token[] = [
  { id: "red-1", player: "red", position: "home" },
  { id: "red-2", player: "red", position: "home" },
  { id: "red-3", player: "red", position: "home" },
  { id: "red-4", player: "red", position: "home" },

  { id: "green-1", player: "green", position: "home" },
  { id: "green-2", player: "green", position: "home" },
  { id: "green-3", player: "green", position: "home" },
  { id: "green-4", player: "green", position: "home" },

  { id: "yellow-1", player: "yellow", position: "home" },
  { id: "yellow-2", player: "yellow", position: "home" },
  { id: "yellow-3", player: "yellow", position: "home" },
  { id: "yellow-4", player: "yellow", position: "home" },

  { id: "blue-1", player: "blue", position: "home" },
  { id: "blue-2", player: "blue", position: "home" },
  { id: "blue-3", player: "blue", position: "home" },
  { id: "blue-4", player: "blue", position: "home" },
];

const Board = () => {
  const [tokens, setTokens] = useState<Token[]>(initialTokens);
  const [diceValue, setDiceValue] = useState<number | null>(null);
  const { blueBoardRef, greenBoardRef, redBoardRef, yellowBoardRef } = useBoardRefs();

const moveToken = (id: string, steps: number) => {
  console.log("Clicked token:", id, "Steps:", steps);

  setTokens(prevTokens =>
    prevTokens.map(token => {
      if (token.id !== id) return token;

      
      if (token.position === "home") {
        if (steps === 6) {
          const startPositions: Record<TeamColor, string> = {
            red: "r1",
            green: "g1",
            yellow: "y1",
            blue: "b1",
          };
          console.log(`Token ${id} is coming out of home to ${startPositions[token.player]}`);
          return { ...token, position: startPositions[token.player] };
        } else {
          console.log(`Token ${id} is in home but dice != 6, so cannot move`);
          return token;
        }
      }
      else{
 // ✅ 2) If token is already out — move forward
      const path = playerPaths[token.player];
      console.log("Current path for player:", path);

      const currentIndex = path.indexOf(token.position);
      console.log("Current index of token position:", currentIndex);

      if (currentIndex === -1) {
        console.log(`Token ${id} position ${token.position} not found in path!`);
        return token;
      }

      const newIndex = currentIndex + steps;
      console.log("New index after move:", newIndex);

      if (newIndex >= path.length) {
        console.log("Token reached or exceeded path length — Won!");
        return { ...token, position: "won" };
      }

      console.log("New position on board:", path[newIndex]);
      return { ...token, position: path[newIndex] };
      }

     
    })
  );

  setDiceValue(null);
};


  return (
    <>
      <div className='ludoContainer'>
        <Dice onRoll={(value) => setDiceValue(value)}/>
          <div id='ludoBoard'>
            <div id='red-Board' ref={redBoardRef} className='board'>
              <div>
                {tokens.filter(t => t.player === 'red').map(t => (
                  <span key={t.id}>
                    {t.position === 'home' && (
                  <img
                      onClick={() => {diceValue && moveToken(t.id, diceValue)}}
                      className="cursor-pointer"
                      src="coinTomato.svg"
                      alt=""
                    />
                    )}
                    </span>
                ))}
              </div>
            </div>
            <div id='green-path' className='verticalPath'>
              <div className="ludoBox" id='r11'>
                 {tokens
                  .filter((t) => t.position === 'r11')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='r12'>
                 {tokens
                  .filter((t) => t.position === 'r12')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='r13'>
                 {tokens
                  .filter((t) => t.position === 'r13')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='r10'>
                 {tokens
                  .filter((t) => t.position === 'r10')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox greenLudoBox" id='gh1'></div>
              <div className="ludoBox greenLudoBox" id='g1'>
                 {tokens
                  .filter((t) => t.position === 'g1')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='r9'>
                 {tokens
                  .filter((t) => t.position === 'r9')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox greenLudoBox" id='gh2'>
                 {tokens
                  .filter((t) => t.position === 'gh2')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='g2'>
                 {tokens
                  .filter((t) => t.position === 'g2')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='r8'>
                 {tokens
                  .filter((t) => t.position === 'r8')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox greenLudoBox" id='gh3'>
                 {tokens
                  .filter((t) => t.position === 'gh3')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='g3'>
                 {tokens
                  .filter((t) => t.position === 'g3')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='r7'>
                 {tokens
                  .filter((t) => t.position === 'r7')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox greenLudoBox" id='gh4'>
                 {tokens
                  .filter((t) => t.position === 'gh4')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='g4'>
                 {tokens
                  .filter((t) => t.position === 'g4')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='r6'>
                 {tokens
                  .filter((t) => t.position === 'r6')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox greenLudoBox" id='gh5'>
                 {tokens
                  .filter((t) => t.position === 'gh5')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='g5'>
                 {tokens
                  .filter((t) => t.position === 'g5')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
            </div>
            <div id='green-Board' ref={greenBoardRef} className='board'>
              <div>
                {tokens.filter(t => t.player === 'green').map(t => (
                  <span key={t.id}>
                    {t.position === 'home' && (
                  <img
                      onClick={() => {diceValue && moveToken(t.id, diceValue)}}
                      className="cursor-pointer"
                      src="coinPalegreen.svg"
                      alt=""
                    />
                    )}
                    </span>
                ))}
              </div>
            </div>
              <div id='red-path' className='horizontalPath'>
              <div className="ludoBox" id='b13'>
                 {tokens
                  .filter((t) => t.position === 'b13')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}</div>              
              <div className="ludoBox redLudoBox" id='r1'>
                {tokens.filter(t => t.position === 'r1').map(t => (
                  <img
                    key={t.id}
                    className="token piece red-piece cursor-pointer"
                    src={tokenImages[t.player]}
                    alt=""
                    onClick={() => diceValue && moveToken(t.id, diceValue)}
                  />
                ))}
              </div>
              
              <div className="ludoBox" id='r2'>
                {tokens
                  .filter((t) => t.position === 'r2')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='r3'>
                {tokens
                  .filter((t) => t.position === 'r3')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='r4'>
                 {tokens
                  .filter((t) => t.position === 'r4')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='r5'>
                 {tokens
                  .filter((t) => t.position === 'r5')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='b12'>
                 {tokens
                  .filter((t) => t.position === 'b12')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox redLudoBox" id='rh1'>
                {tokens
                  .filter((t) => t.position === 'rh1')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox redLudoBox" id='rh2'>
                {tokens
                  .filter((t) => t.position === 'rh2')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox redLudoBox" id='rh3'>
                {tokens
                  .filter((t) => t.position === 'rh3')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox redLudoBox" id='rh4'>
                {tokens
                  .filter((t) => t.position === 'rh4')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox redLudoBox" id='rh5'>
                {tokens
                  .filter((t) => t.position === 'rh5')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='b11'>
                 {tokens
                  .filter((t) => t.position === 'b11')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='b10'>
                 {tokens
                  .filter((t) => t.position === 'b10')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='b9'>
                 {tokens
                  .filter((t) => t.position === 'b9')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='b8'>
                 {tokens
                  .filter((t) => t.position === 'b8')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='b7'>
                 {tokens
                  .filter((t) => t.position === 'b7')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='b6'>
                 {tokens
                  .filter((t) => t.position === 'b6')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
            
            </div>
            <div id="win-Zone"></div>
            <div id='yellow-path' className='horizontalPath'>
              <div className="ludoBox" id='g6'>
                 {tokens
                  .filter((t) => t.position === 'g6')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='g7'>
                 {tokens
                  .filter((t) => t.position === 'g7')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='g8'>
                 {tokens
                  .filter((t) => t.position === 'g8')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='g9'>
                 {tokens
                  .filter((t) => t.position === 'g9')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='g10'>
                 {tokens
                  .filter((t) => t.position === 'g10')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='g11'>
                 {tokens
                  .filter((t) => t.position === 'g11')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox yellowLudoBox" id='yh1'></div>
              <div className="ludoBox yellowLudoBox" id='yh2'></div>
              <div className="ludoBox yellowLudoBox" id='yh3'></div>
              <div className="ludoBox yellowLudoBox" id='yh4'></div>
              <div className="ludoBox yellowLudoBox" id='yh5'></div>
              <div className="ludoBox" id='g12'>
                 {tokens
                  .filter((t) => t.position === 'g12')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='y5'>
                 {tokens
                  .filter((t) => t.position === 'y5')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='y4'>
                 {tokens
                  .filter((t) => t.position === 'y4')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='y3'>
                 {tokens
                  .filter((t) => t.position === 'y3')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='y2'>
                 {tokens
                  .filter((t) => t.position === 'y2')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox yellowLudoBox" id='y1'>
                 {tokens
                  .filter((t) => t.position === 'y1')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='g13'>
                 {tokens
                  .filter((t) => t.position === 'g13')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
            
            </div>
            <div id='blue-Board' ref={blueBoardRef} className='board'>
              <div>
                {tokens.filter(t => t.player === 'blue').map(t => (
                  <span key={t.id}>
                    {t.position === 'home' && (
                  <img
                      onClick={() => {diceValue && moveToken(t.id, diceValue)}}
                      className="cursor-pointer"
                      src="coinBlue.svg"
                      alt=""
                    />
                    )}
                    </span>
                ))}
              </div>
            </div>
            <div id='blue-path' className='verticalPath'>
              <div className="ludoBox" id='b5'>
                 {tokens
                  .filter((t) => t.position === 'b5')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox blueLudoBox" id='bh1'>
                 {tokens
                  .filter((t) => t.position === 'bh1')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='y6'>
                 {tokens
                  .filter((t) => t.position === 'y6')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='b4'>
                 {tokens
                  .filter((t) => t.position === 'b4')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox blueLudoBox" id='bh2'>
                 {tokens
                  .filter((t) => t.position === 'bh2')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='y7'>
                 {tokens
                  .filter((t) => t.position === 'y7')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='b3'>
                 {tokens
                  .filter((t) => t.position === 'b3')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox blueLudoBox" id='bh3'>
                 {tokens
                  .filter((t) => t.position === 'bh3')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='y8'>
                 {tokens
                  .filter((t) => t.position === 'y8')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='b2'>
                 {tokens
                  .filter((t) => t.position === 'b2')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox blueLudoBox" id='bh4'>
                 {tokens
                  .filter((t) => t.position === 'bh4')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='y9'>
                 {tokens
                  .filter((t) => t.position === 'y9')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox blueLudoBox" id='b1'>
                 {tokens
                  .filter((t) => t.position === 'b1')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox blueLudoBox" id='bh5'>
                 {tokens
                  .filter((t) => t.position === 'bh5')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='y10'>
                 {tokens
                  .filter((t) => t.position === 'y10')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='y13'>
                 {tokens
                  .filter((t) => t.position === 'y13')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='y12'>
                 {tokens
                  .filter((t) => t.position === 'y12')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
              <div className="ludoBox" id='y11'>
                 {tokens
                  .filter((t) => t.position === 'y11')
                  .map((t) => (
                    <img key={t.id} src={tokenImages[t.player]} onClick={() => diceValue && moveToken(t.id, diceValue)} className="token piece red-piece" />
                ))}
              </div>
            </div>
            <div id='yellow-Board' ref={yellowBoardRef} className='board'>
              <div>
               {tokens.filter(t => t.player === 'yellow').map(t => (
                  <span key={t.id}>
                    {t.position === 'home' && (
                  <img
                      onClick={() => {diceValue && moveToken(t.id, diceValue)}}
                      className="cursor-pointer"
                      src="coinYellow.svg"
                      alt=""
                    />
                    )}
                    </span>
                ))}
              </div>
            </div>
            

          </div>
      </div>
    </>
  )
}

export default Board