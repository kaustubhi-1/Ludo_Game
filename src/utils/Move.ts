import CapturingPiece  from './CapturingPiece';
import Moving from './Moving';
import WinCheck from './WinCheck';
import { PlayerPositions, TeamColor } from "@/types/Token";

type MoveProps = {
  currentPlayer: TeamColor;
  playerPositions: PlayerPositions;
  diceNumberValue: React.RefObject<number>;
//   setDiceDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayerPositions: React.Dispatch<React.SetStateAction<PlayerPositions>>;
  nextTurn: () => void;
  win: TeamColor[];
  setWin: React.Dispatch<React.SetStateAction<TeamColor[]>>;
};
const Move = (
  e: React.MouseEvent<HTMLElement>, 
  {
    currentPlayer,
    playerPositions,
    diceNumberValue,
    setPlayerPositions,
    nextTurn,
    win,
    setWin
  }: MoveProps
): void => {  const diceNumber = diceNumberValue.current;

  let id;
  if (e.currentTarget.id) {
    id = e.currentTarget.id;
  } else {
    id = (e.currentTarget.parentElement as HTMLElement).id;  }

  const [color, indexStr] = id.split("-");
  
  if (diceNumber === 0) return;
  if (currentPlayer !== color) return;
  

  const index = parseInt(indexStr, 10); 

  const currentPosition = playerPositions[currentPlayer][index];

  let newPosition = currentPosition + diceNumber;

  if (currentPosition === 0 && diceNumber === 6){
    if (currentPlayer === 'red') {
      newPosition = 1;
    } else if (currentPlayer === 'blue') {
      newPosition = 40;
    } else if (currentPlayer === 'green') {
      newPosition = 27;
    } else if (currentPlayer === 'yellow') {
      newPosition = 14;
    }
  } else if (currentPosition === 0 && diceNumber !== 6) {
    return;
  }

  if (WinCheck(color, newPosition, nextTurn, playerPositions) === false) return;

  Moving(currentPosition, setPlayerPositions, color, index, newPosition, playerPositions, currentPlayer, win, setWin)

//   setDiceDisabled(false);
  
 if (!CapturingPiece(newPosition, color, setPlayerPositions) && diceNumber !== 6 && ![106, 206, 306, 406].includes(newPosition)){
    nextTurn();
 } 

  diceNumberValue.current = 0;

}

export default Move;