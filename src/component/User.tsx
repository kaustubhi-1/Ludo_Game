import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Piece, TeamColor } from '@/types/Token';
import Dices from './Dices';
interface PieceProps {
  color: TeamColor;
//   id: string;
}
const User : React.FC<PieceProps> = ({ color}) => {
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
        <div>
            <FontAwesomeIcon
                icon={faLocationDot}
                className="token-icon"
                style={{ color: colorGenerator(color) }}
            />
        </div>
        <div>
            <Dices/>
        </div>
    </div>
  )
}

export default User