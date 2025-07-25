'use client'
import React, { useState } from 'react'
import Dice from './Dice'
import { PlayerColor, Token } from '../types/token';

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

    const moveOutOfHome = (id: string, player: PlayerColor) => {
    if (diceValue !== 6) return; // can only move out on 6

    const startPositions: Record<PlayerColor, number> = {
      red: 0,
      green: 13,
      yellow: 26,
      blue: 39,
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
            <div id='red-Board' className='board'>
              <div>
                {tokens.filter(t => t.player === 'red' && t.position === 'home').map(t => (
                  <span key={t.id}>
                    <img 
                    onClick={() => moveOutOfHome(t.id, t.player)}
                    className="cursor-pointer"
                   src="coinTomato.svg" alt="" />{/* ⚪️ or custom icon */}</span>
                ))}
              </div>
            </div>
            <div id='green-path' className='verticalPath'>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
            </div>
            <div id='green-Board' className='board'>
              <div>
                {tokens.filter(t => t.player === 'green').map(t => (
                  <span key={t.id}><img src="coinTomato.svg" alt="" />{/* ⚪️ or custom icon */}</span>
                ))}
              </div>
            </div>
              <div id='red-path' className='horizontalPath'>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
            
            </div>
            <div id="win-Zone"></div>
            <div id='yellow-path' className='horizontalPath'>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
            
            </div>
            <div id='blue-Board' className='board'>
              <div>
                {tokens.filter(t => t.player === 'blue').map(t => (
                  <span key={t.id}><img src="coinTomato.svg" alt="" />{/* ⚪️ or custom icon */}</span>
                ))}
              </div>
            </div>
            <div id='blue-path' className='verticalPath'>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
              <div className="ludoBox"></div>
            </div>
            <div id='yellow-Board' className='board'>
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