import React, { ReactNode } from 'react';
// import '../styles/Home.css'; 
import { colorGenerator, useGame } from '../context/GameContext';
import { TeamColor } from '../types/Token';

type HomeProps = {
  color: TeamColor;
  children: ReactNode;
};
const  Home = ({ color, children }: HomeProps) =>  {
  const { currentPlayer } = useGame();


  function chanceColor(currentPlayer:string, color:TeamColor) {
    if (currentPlayer === color) {
      return `home-inner ${currentPlayer}-chance`;
    } else {
      return 'home-inner';
    }
  }
const placeholders = [0, 1, 2, 3];
  return (
    <div id={`${color}-home`} className='home' style={{ backgroundColor: colorGenerator(color) }}>
      <div className={chanceColor(currentPlayer, color)}>
        {placeholders.map((i)=>{
          return <div key={i} className='home-spot' style={{ backgroundColor: colorGenerator(color) }}>
              {React.Children.toArray(children)[i]}
          </div>
        })}
        {/* {children} */}
      </div>
    </div>
  );
};

export default Home;
