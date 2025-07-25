"use client";
import React from "react";

interface DiceProps {
  onRoll: (value: number) => void;
}

const Dice: React.FC<DiceProps> = ({ onRoll }) => {
  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    onRoll(result);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={rollDice}
        className="bg-white text-black px-6 py-2 rounded-md shadow-md hover:bg-gray-100"
      >
        🎲 Roll Dice
      </button>
    </div>
  );
};

export default Dice;
