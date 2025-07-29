"use client";
import React, { useState } from "react";
import { DiceProps } from "../../types/Token";

export default function Dice  ({ onRoll }:DiceProps)  {
  const [result, setResult] = useState<number | null>(null);
  const rollDice = () => {
    const value = Math.floor(Math.random() * 6) + 1;
    setResult(value)
    onRoll(value);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={rollDice}
        className="bg-white text-black px-6 py-2 rounded-md shadow-md hover:bg-gray-100"
      >
        🎲 Roll Dice {result && <div className="text-black">You rolled: {result}</div>}
      </button>
    </div>
  );
};


