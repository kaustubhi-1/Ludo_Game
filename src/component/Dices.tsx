import React, { useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';
import DiceRolled from '@/utils/DiceRolled';
// import '../styles/Dice.css';

const Dices = () => {

  const { diceNumberValue, rollDice, currentPlayer, playerPositions, nextTurn } = useGame();
  const [shadow, setShadow] = useState("");
  const diceNumber = diceNumberValue.current;

//   const audio = new Audio(rollSound);

  const [rotated, setRotated] = useState(false);

  const allInitialValues = [1, 2, 3, 4, 5, 6]
  const [allValues, setValues] = useState(allInitialValues);

  const [diceStyle, setDiceStyle] = useState('hidden');

  const handleClick = () => {

    const audio = new Audio("/assests_roll.mp3");

    setTimeout(() => {
      setDiceStyle('visible')
      rollDice();
    }, 100);

    setRotated(true);

    setValues(allInitialValues);

    setValues(prevValues => {
      const otherValues = [...prevValues];
      otherValues[diceNumber - 1] = 2;
      return otherValues;
    });

    setTimeout(() => {
      setRotated(false);
      if (!audio.paused && audio.currentTime > 0 && !audio.ended) {
        audio.pause();
        audio.currentTime = 0;
      }
    
    }, 1000);

    setTimeout(() => { setDiceStyle('hidden') }, 800);

  };

  useEffect(() => {

    DiceRolled(diceNumberValue, nextTurn, currentPlayer, playerPositions)

    if (diceNumber === 0) return;
    
    if ((diceNumber === 6 || playerPositions[currentPlayer].some(value => value !== 0))) {
    //   setDiceDisabled(true);
    } else {
      setTimeout(() => {
        diceNumberValue.current = 0;
        nextTurn();
        // setDiceDisabled(false);
      }, 1500);
    }

  }, [diceNumber, playerPositions, diceNumberValue, nextTurn]);

  return (
    <div id="dice" >
      <div
        className={`dice ${rotated ? 'rotate' : ''}`}
        onClick={handleClick}
        style={{ overflow: diceStyle }}
      >
        <div className="face top shadow-on">
          <div className={'inner-face face' + allValues[0]}>
            {Array(allValues[0])
              .fill(null)
              .map((_, i) => (
                <span key={i} className={'dot'} />
              ))}
          </div>
        </div>
            <div className="face front">
            <div className={'inner-face face' + allValues[1]}>
                {Array(allValues[1])
                .fill(null)
                .map((_, i) => (
                    <span key={i} className="dot" />
                ))}
            </div>
            </div>
        <div className="face left shadow-on">
          <div className={'inner-face face' + allValues[2]}>
            {Array(allValues[2])
              .fill(null)
              .map((_, i) => (
                <span key={i} className="dot" />
              ))}
          </div>
        </div>
        {/* Main Face (front face) */}
        <div className="face back">
          <div className={'inner-face face' + diceNumber}>
            {Array(diceNumber)
              .fill(null)
              .map((_, i) => (
                <span key={i} className="dot" />
              ))}
            {diceNumber === 0 && (
              <span className="dice-initial-face">ROLL</span>
            )}
          </div>
        </div>
        <div className="face right shadow-on">
          <div className={'inner-face face' + allValues[4]}>
            {Array(allValues[4])
              .fill(null)
              .map((_, i) => (
                <span key={i} className="dot" />
              ))}
          </div>
        </div>
        <div className="face bottom shadow-on">
          <div className={'inner-face face' + allValues[5]}>
            {Array(allValues[5])
              .fill(null)
              .map((_, i) => (
                <span key={i} className="dot" />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dices;