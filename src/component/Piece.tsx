import React from "react";
import Move from "../utils/Move";
import { useGame } from "../context/GameContext";
// import '../styles/Piece.css'
import { TeamColor } from "@/types/Token";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
interface PieceProps {
  color: TeamColor;
  id: string;
}

const Piece: React.FC<PieceProps> = ({ color, id }) => {
  const {
    currentPlayer,
    diceNumberValue,
    playerPositions,
    setDiceDisabled,
    setPlayerPositions,
    nextTurn,
    win,
    setWin,
  } = useGame();

  function colorGenerator(color: TeamColor): string {
    switch (color) {
      case "red":
        return "#FF0800";
      case "blue":
        return "#0000FF";
      case "green":
        return "#4CBB17";
      case "yellow":
        return "#FFC40C";
      default:
        return "white";
    }
  }

  const make_a_move = (e: React.MouseEvent<SVGSVGElement>) => {
    Move(e, {
      currentPlayer,
      playerPositions,
      diceNumberValue,
      setDiceDisabled,
      setPlayerPositions,
      nextTurn,
      win,
      setWin,
    });
  };

  return (
    <>
      {/* <div className='piece-outer' style={{backgroundColor: colorGenerator(color)}}/> */}
      <div id={id} className="token-wrapper" >
        <div className="token-base" />
        <FontAwesomeIcon
          icon={faLocationDot}
          className="token-icon"
          style={{ color: colorGenerator(color) }}
          onClick={make_a_move}
        />
      </div>
    </>
  );
};

export default Piece;
