import { useBoardRefs } from "@/hooks/useBoardRefs";
import { Piece } from "../../types/Token";
import { homePathArray, homePathEntries } from "@/data/dataConfig";

export const diceRollAudio = new Audio('/assets/dice_roll.wav')
export const audioMoveAudio = new Audio('/assets/pieceMove.wav')


export function unlockPiece(piece: Piece): Piece {
  return {
    ...piece,
    status: 1,
    position: piece.gameEntry,
  };
}

export function updatePosition(piece: Piece, newPosition: string): Piece {
  return {
    ...piece,
    position: newPosition,
  };
}

export function sendToBoard(piece: Piece): Piece {
  return {
    ...piece,
    position: piece.initialPosition,
    score: 0,
    status: 0,
  };
}
export function resetPiece(piece: Piece): Piece {
  return {
    ...piece,
    position: piece.initialPosition,
    score: 0,
    status: 0,
  };
}

export function calculatePath(
    piece:Piece,
    array:string[],
    diceResult:number
):{path:string[],hasBonus:boolean}{
    let filteredArray = array;

    if(array.includes(piece.homePathEntry)){
        const indexOfHomePathEntry = array.findIndex(x => x === piece.homePathEntry)
        let newSlicedArray = array.slice(0,indexOfHomePathEntry)

        if(newSlicedArray.length < diceResult){
            const remaining = diceResult - newSlicedArray.length
            const secondPart = homePathEntries[piece.team].slice(0,remaining)
            newSlicedArray = newSlicedArray.concat(secondPart)
        }
        filteredArray = newSlicedArray
    }

     const hasBonus = filteredArray.includes("home");
  return { path: filteredArray, hasBonus };
}