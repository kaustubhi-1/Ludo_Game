import { tokenImages } from "@/config/constants";
import { Token } from "../../types/Token";

interface LudoBoxProps {
  id: string; 
  tokens: Token[]; 
  diceValue: number | null;
  moveToken: (id: string, diceValue: number) => void;
}

export default function LudoBox({ id, tokens, diceValue, moveToken }: LudoBoxProps) {
  return (
    <div className="ludoBox" id={id}>
      {tokens
        .filter((t) => t.position === id) // get tokens in THIS box only
        .map((t) => (
          <img
            key={t.id}
            src={tokenImages[t.player]}
            onClick={() => diceValue && moveToken(t.id, diceValue)}
            className={`token piece ${t.player}-piece`} 
          />
        ))}
    </div>
  );
}
