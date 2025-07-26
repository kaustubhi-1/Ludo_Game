'use client'
import React, { useEffect, useRef, useState } from 'react'
import Dice from './Dice'
import { BoardProps, TeamColor, Token } from '../../types/Token';
import { useBoardRefs } from '@/hooks/useBoardRefs';


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

  // const [playerTurns, setPlayerTurns] = useState<TeamColor[]>(["red", "green", "yellow", "blue"]);
  // const [currentPlayerTurnIndex, setCurrentPlayerTurnIndex] = useState<number>(0);
  // const [prevPlayerTurnIndex, setPrevPlayerTurnIndex] = useState<number | null>(null);
  // const [currentPlayerTurnStatus, setCurrentPlayerTurnStatus] = useState<boolean>(true);
  // const [teamHasBonus, setTeamHasBonus] = useState<boolean>(false);

   const boardDetails = [
    { boardColor: 'blue', board: blueBoardRef, homeEntry: 'y13', gameEntry: 'b1' },
    { boardColor: 'green', board: greenBoardRef, homeEntry: 'r13', gameEntry: 'g1' },
    { boardColor: 'red', board: redBoardRef, homeEntry: 'b13', gameEntry: 'r1' },
    { boardColor: 'yellow', board: yellowBoardRef, homeEntry: 'g13', gameEntry: 'y1' }
];

  // const blueBoardRef = useRef<HTMLDivElement | null>(null);
  // const greenBoardRef = useRef<HTMLDivElement | null>(null);
  // const redBoardRef = useRef<HTMLDivElement | null>(null);
  // const yellowBoardRef = useRef<HTMLDivElement | null>(null);
  // const rollDiceButtonRef = useRef<HTMLButtonElement | null>(null);

  // useEffect(() => {
  //   if (blueBoardRef.current) {
  //     console.log("blueBoard DOM node:", blueBoardRef.current);
  //   }
  //   if (redBoardRef.current) {
  //     console.log("redBoard DOM node:", redBoardRef.current);
  //   }
  //   if (greenBoardRef.current) {
  //     console.log("greenBoard DOM node:", greenBoardRef.current);
  //   }
  //   if (yellowBoardRef.current) {
  //     console.log("yellowBoard DOM node:", yellowBoardRef.current);
  //   }
  // }, []);

    const moveOutOfHome = (id: string, player: TeamColor) => {
    if (diceValue !== 6) return; // can only move out on 6

    const startPositions: Record<TeamColor, string> = {
      red: "r1",
      green: "g1",
      yellow: "y1",
      blue: "b1",
    };

    setTokens(prev => prev.map(token =>
        token.id === id
          ? { ...token, position: startPositions[player] }
          : token
      )
    );

    setDiceValue(null); // reset dice after move
  };

  return (
    <>
      <div className='ludoContainer'>
        <Dice onRoll={(value) => setDiceValue(value)}/>
          {diceValue && <div className="text-white">You rolled: {diceValue}</div>}
          <div id='ludoBoard'>
            <div id='red-Board' ref={redBoardRef} className='board'>
              <div>
                {tokens.filter(t => t.player === 'red').map(t => (
                  <span key={t.id}>
                    {t.position === 'home' && (
                    <img 
                    onClick={() => moveOutOfHome(t.id, t.player)}
                    className="cursor-pointer"
                   src="coinTomato.svg" alt="" />
                    )}
                    {/* ⚪️ or custom icon */}</span>
                ))}
              </div>
            </div>
            <div id='green-path' className='verticalPath'>
              <div className="ludoBox" id='r11'></div>
              <div className="ludoBox" id='r12'></div>
              <div className="ludoBox" id='r13'></div>
              <div className="ludoBox" id='r10'></div>
              <div className="ludoBox greenLudoBox" id='gh1'></div>
              <div className="ludoBox greenLudoBox" id='g1'></div>
              <div className="ludoBox" id='r9'></div>
              <div className="ludoBox greenLudoBox" id='gh2'></div>
              <div className="ludoBox" id='g2'></div>
              <div className="ludoBox" id='r8'></div>
              <div className="ludoBox greenLudoBox" id='gh3'></div>
              <div className="ludoBox" id='g3'></div>
              <div className="ludoBox" id='r7'></div>
              <div className="ludoBox greenLudoBox" id='gh4'></div>
              <div className="ludoBox" id='g4'></div>
              <div className="ludoBox" id='r6'></div>
              <div className="ludoBox greenLudoBox" id='gh5'></div>
              <div className="ludoBox" id='g5'></div>
            </div>
            <div id='green-Board' ref={greenBoardRef} className='board'>
              <div>
                {tokens.filter(t => t.player === 'green').map(t => (
                  <span key={t.id}><img src="coinTomato.svg" alt="" />{/* ⚪️ or custom icon */}</span>
                ))}
              </div>
            </div>
              <div id='red-path' className='horizontalPath'>
              <div className="ludoBox" id='b13'></div>              
              <div className="ludoBox redLudoBox" id='r1'>
                {tokens.filter(t=>t.position === 'r1').map(t=>(
                  <img
                    key={t.id}
                    className="token piece red-piece"
                    src="coinTomato.svg"
                    alt=""
                  />
                ))}
              </div>
              <div className="ludoBox" id='r2'></div>
              <div className="ludoBox" id='r3'></div>
              <div className="ludoBox" id='r4'></div>
              <div className="ludoBox" id='r5'></div>
              <div className="ludoBox" id='b12'></div>
              <div className="ludoBox redLudoBox" id='rh1'></div>
              <div className="ludoBox redLudoBox" id='rh2'></div>
              <div className="ludoBox redLudoBox" id='rh3'></div>
              <div className="ludoBox redLudoBox" id='rh4'></div>
              <div className="ludoBox redLudoBox" id='rh5'></div>
              <div className="ludoBox" id='b11'></div>
              <div className="ludoBox" id='b10'></div>
              <div className="ludoBox" id='b9'></div>
              <div className="ludoBox" id='b8'></div>
              <div className="ludoBox" id='b7'></div>
              <div className="ludoBox" id='b6'></div>
            
            </div>
            <div id="win-Zone"></div>
            <div id='yellow-path' className='horizontalPath'>
              <div className="ludoBox" id='g6'></div>
              <div className="ludoBox" id='g7'></div>
              <div className="ludoBox" id='g8'></div>
              <div className="ludoBox" id='g9'></div>
              <div className="ludoBox" id='g10'></div>
              <div className="ludoBox" id='g11'></div>
              <div className="ludoBox yellowLudoBox" id='yh1'></div>
              <div className="ludoBox yellowLudoBox" id='yh2'></div>
              <div className="ludoBox yellowLudoBox" id='yh3'></div>
              <div className="ludoBox yellowLudoBox" id='yh4'></div>
              <div className="ludoBox yellowLudoBox" id='yh5'></div>
              <div className="ludoBox" id='g12'></div>
              <div className="ludoBox" id='y5'></div>
              <div className="ludoBox" id='y4'></div>
              <div className="ludoBox" id='y3'></div>
              <div className="ludoBox" id='y2'></div>
              <div className="ludoBox yellowLudoBox" id='y1'></div>
              <div className="ludoBox" id='g13'></div>
            
            </div>
            <div id='blue-Board' ref={blueBoardRef} className='board'>
              <div>
                {tokens.filter(t => t.player === 'blue').map(t => (
                  <span key={t.id}><img src="coinTomato.svg" alt="" />{/* ⚪️ or custom icon */}</span>
                ))}
              </div>
            </div>
            <div id='blue-path' className='verticalPath'>
              <div className="ludoBox" id='b5'></div>
              <div className="ludoBox blueLudoBox" id='bh1'></div>
              <div className="ludoBox" id='y6'></div>
              <div className="ludoBox" id='b4'></div>
              <div className="ludoBox blueLudoBox" id='bh2'></div>
              <div className="ludoBox" id='y7'></div>
              <div className="ludoBox" id='b3'></div>
              <div className="ludoBox blueLudoBox" id='bh3'></div>
              <div className="ludoBox" id='y8'></div>
              <div className="ludoBox" id='b2'></div>
              <div className="ludoBox blueLudoBox" id='bh4'></div>
              <div className="ludoBox" id='y9'></div>
              <div className="ludoBox blueLudoBox" id='b1'></div>
              <div className="ludoBox blueLudoBox" id='bh5'></div>
              <div className="ludoBox" id='y10'></div>
              <div className="ludoBox" id='y13'></div>
              <div className="ludoBox" id='y12'></div>
              <div className="ludoBox" id='y11'></div>
            </div>
            <div id='yellow-Board' ref={yellowBoardRef} className='board'>
              <div>
               {tokens.filter(t => t.player === 'yellow').map(t => (
                  <span key={t.id}><img src="coinTomato.svg" alt="" />{/* ⚪️ or custom icon */}</span>
                ))}
              </div>
            </div>
            

          </div>
      </div>
    </>
  )
}

export default Board