'use client'
import Boards from "@/component/Boards";
import Dices from "@/component/Dices";
import User from "@/component/User";
import { useState } from "react";


export default function Home() {
  const [boardRotate, setBoardRotate] = useState(0);


  return (
<>
      <div className="App">
      {/* <GameOver /> */}
      {/* <div className='mobile-current-player'> */}
      {/* <PlayerChance /> */}
      {/* </div> */}
      <div id = "second-container">
        <div className='dice-container'>
        <Dices color={'yellow'}/>
        <Dices color={'green'}/>
        </div>
        </div>
        <div id="board-container" style={{transform: `rotate(${boardRotate}deg)`}}>
          <Boards />
        </div>
        <div id = "second-container">
        <div className='dice-container'>
        <Dices color={'red'}/>
        <Dices color={'blue'} />
        </div>
        </div>
      </div>
    </>
  );
}
