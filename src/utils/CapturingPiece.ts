import { PlayerPositions, TeamColor } from "@/types/Token";
import TrackLayout from "./TrackLayout";

const forbiddenCapturePositions = {
  red: 52,
  yellow: 13,
  green: 26,
  blue: 39,
};

const CapturingPiece = (
  newPosition: number,
  color: TeamColor,
  setPlayerPositions: React.Dispatch<React.SetStateAction<PlayerPositions>>
) => {
  if (newPosition > 100) return;
  if (newPosition === forbiddenCapturePositions[color]) {
    return false;
  }
let adjustedPosition = newPosition;
  if (newPosition > 52) {
    adjustedPosition = newPosition - 52;
  }
console.log(newPosition)
  const trackType = TrackLayout[adjustedPosition]?.type;
  const pieceOnTrack = TrackLayout[adjustedPosition]?.Piece;

  if (!trackType.includes("safe") && pieceOnTrack.length > 0) {
    const [pieceColorstr, pieceIndexstr] = pieceOnTrack[0].split("-");
    const pieceColor = pieceColorstr as TeamColor;
    const pieceIndex = parseInt(pieceIndexstr, 10);
    if (pieceColor !== color) {
      setPlayerPositions((prev) => {
        const newPlayerPositions = { ...prev };
        newPlayerPositions[pieceColor][pieceIndex] = 0;//yha se wapas bhej rhe ghar marne ke bad
        return newPlayerPositions;
      });
      pieceOnTrack.pop();
      return true;
    }
  }
  return false;
};

export default CapturingPiece;
