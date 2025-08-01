import React, { ReactNode } from 'react';
// import '../styles/Home.css'; 
import { useGame } from '../context/GameContext';
import { TeamColor } from '../types/Token';

type HomeProps = {
  color: TeamColor;
  children: ReactNode;
};
const  Home = ({ color, children }: HomeProps) =>  {
  const { currentPlayer } = useGame();

  function colorGenerator(color:TeamColor) {
    switch (color) {
      case 'red': return '#B22222';
      case 'blue': return '#1034A6';
      case 'green': return '#228B22';
      case 'yellow': return '#F4C431';
      default: return 'white';
    }
  }

  function chanceColor(currentPlayer:string, color:TeamColor) {
    if (currentPlayer === color) {
      return `home-inner ${currentPlayer}-chance`;
    } else {
      return 'home-inner';
    }
  }

  return (
    <div id={`${color}-home`} className='home' style={{ backgroundColor: colorGenerator(color) }}>
      <div className={chanceColor(currentPlayer, color)}>
        {children}
      </div>
    </div>
  );
};

export default Home;
