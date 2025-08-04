import { PlayerPositions, TeamColor } from "@/types/Token";
import TrackLayout from "./TrackLayout";

const CapturingPiece = (
  newPosition: number,
  color: TeamColor,
  setPlayerPositions: React.Dispatch<React.SetStateAction<PlayerPositions>>
) => {
  if (newPosition > 100) return;

  if (newPosition > 52) {
    newPosition -= 52;
  }

  const trackType = TrackLayout[newPosition].type;
  const pieceOnTrack = TrackLayout[newPosition].Piece;

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
