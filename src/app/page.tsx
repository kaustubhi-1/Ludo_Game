'use client'
import Board from "@/component/Board";
import Boards from "@/component/Boards";
import Dice from "@/component/Dice";
import Dices from "@/component/Dices";
import { useState } from "react";


export default function Home() {
  const [boardRotate, setBoardRotate] = useState(0);


  return (
<>
      <div className="App">
      {/* <GameOver /> */}
      <div className='mobile-current-player'>
      {/* <PlayerChance /> */}
      </div>
        <div id="board-container" style={{transform: `rotate(${boardRotate}deg)`}}>
          <Boards />
        </div>
        <div id = "second-container">
        {/* <Settings setBoardRotate={setBoardRotate}/> */}
        <div className='dice-container'>
        <Dices />
        </div>
        </div>
      </div>
    </>
  );
}
