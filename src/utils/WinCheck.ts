import { PlayerPositions, TeamColor } from "@/types/Token";

 type WinCheckFn = (
  color: TeamColor,
  newPosition: number,
  nextTurn: () => void,
  playerPositions: PlayerPositions
) => boolean | undefined;
const WinCheck : WinCheckFn =(color, newPosition, nextTurn, playerPositions) => {
  console.log(newPosition)
  const allPlayers = ['red', 'yellow', 'green', 'blue'];

  if (newPosition > (100*(allPlayers.indexOf(color)+1)) + 6) {
    return false;
  }
}

export default WinCheck