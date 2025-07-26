import React, { useState } from 'react'
import { TeamColor } from '../../types/Token';

const Coin = () => {
  const [playerTurns, setPlayerTurns] = useState<TeamColor[]>(["red", "green", "yellow", "blue"]);
  const [currentPlayerTurnIndex, setCurrentPlayerTurnIndex] = useState<number>(0);
  const [prevPlayerTurnIndex, setPrevPlayerTurnIndex] = useState<number | null>(null);
  const [currentPlayerTurnStatus, setCurrentPlayerTurnStatus] = useState<boolean>(true);
  const [teamHasBonus, setTeamHasBonus] = useState<boolean>(false);
  return (
    <div>Coin</div>
  )
}

export default Coin