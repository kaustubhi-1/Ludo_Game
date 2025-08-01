import React from 'react'
import Move from '../utils/Move'
import { useGame } from '../context/GameContext'
// import '../styles/Piece.css'
import { TeamColor } from '@/types/Token';
interface PieceProps {
  color: TeamColor;
  id: string;
}


const Piece : React.FC<PieceProps> =({color, id}) => {
    

  const { currentPlayer, diceNumberValue, playerPositions, setPlayerPositions, nextTurn, win, setWin } = useGame();

  function colorGenerator(color: TeamColor): string  {
    switch(color) {
      case 'red':
        return '#FF0800';
      case 'blue':
        return '#0000FF';
      case 'green':
        return '#4CBB17';
      case 'yellow':
        return '#FFC40C';
      default:
        return 'white';
    }
  }

  const make_a_move = (e: React.MouseEvent<HTMLDivElement>) => {
    Move(e, { currentPlayer, playerPositions, diceNumberValue, setPlayerPositions, nextTurn, win, setWin});
  }

  return (
    <div id={id}className="piece" style={{backgroundColor: colorGenerator(color)}} onClick={make_a_move}>
        <div className="piece-inner"></div>
    </div>
  )
}

export default Piece