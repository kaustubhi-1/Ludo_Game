import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Piece, TeamColor } from "@/types/Token";
import Dices from "./Dices";
interface PieceProps {
  color: TeamColor;
  //   id: string;
}
function User({ color }: PieceProps) {
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

  return (
    <div>
      <FontAwesomeIcon
        icon={faLocationDot}
        className="token-icon"
        style={{
          color: colorGenerator(color),
          marginTop: "24px",
          paddingTop:'2px',
          paddingBottom:'2px',
          width:"2rem",
          height:'2rem',
        }}
      />
    </div>
  );
};

export default User;
