import Rules from "./Rules";
import { PlayerPositions, TeamColor } from "@/types/Token";

type MovingFn = (
  currentPosition: number,
  setPlayerPositions: React.Dispatch<React.SetStateAction<PlayerPositions>>,
  color: TeamColor,
  index: number,
  newPosition: number,
  playerPositions: PlayerPositions,
  currentPlayer: TeamColor,
  win: TeamColor[],
  setWin: React.Dispatch<React.SetStateAction<TeamColor[]>>
) => void;

const Moving: MovingFn = (
  currentPosition,
  setPlayerPositions,
  color,
  index,
  newPosition,
  playerPositions,
  currentPlayer,
  win,
  setWin
) => {
  const [totalPositions, winTrackPosition, newPositionInRange] = Rules(
    color,
    currentPosition,
    newPosition
  );

  if (currentPosition === 0) {
    changingPosition(
      color,
      index,
      newPositionInRange,
      setPlayerPositions,
      playerPositions,
      currentPlayer,
      win,
      setWin
    );
  } else {
    const positionsToMove =
      newPositionInRange -
      currentPosition +
      (newPosition > totalPositions && currentPosition < 100
        ? totalPositions
        : 0);
    for (let i = 1; i <= positionsToMove; i++) {
      setTimeout(() => {
        const newPosition =
          currentPosition + i > totalPositions && currentPosition < 100
            ? winTrackPosition + ((currentPosition + i) % totalPositions)
            : currentPosition + i;
        changingPosition(
          color,
          index,
          newPosition,
          setPlayerPositions,
          playerPositions,
          currentPlayer,
          win,
          setWin
        );
      }, 400 * (i - 1));
    }
  }
};

export default Moving;

const changingPosition = (
  color: TeamColor,
  index: number,
  newPosition: number,
  setPlayerPositions: React.Dispatch<React.SetStateAction<PlayerPositions>>,
  playerPositions: PlayerPositions,
  currentPlayer: TeamColor,
  win: TeamColor[],
  setWin: React.Dispatch<React.SetStateAction<TeamColor[]>>
) => {
  setPlayerPositions((prev) => {
    const newPlayerPositions = { ...prev };
    newPlayerPositions[color][index] = newPosition;
    if (
      playerPositions[currentPlayer].every(
        (value) =>
          value === 106 || value === 206 || value === 306 || value === 406
      ) &&
      win.includes(color) === false
    ) {
      setWin([...win, color]);
    }
    return newPlayerPositions;
  });
};
