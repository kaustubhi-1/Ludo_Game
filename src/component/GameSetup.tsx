// "use client";

// import { useState } from "react";
// // import { boardDetails } from "../lib/dataConfig"; // your board info

// type PlayerColor = "blue" | "red" | "green" | "yellow";

// interface PlayerPiece {
//   team: PlayerColor;
//   position: string;
//   score: number;
//   homeEntry: string;
//   id: string;
//   gameEntry: string;
//   status: number;
//   initialPosition: string;
// }

// export default function GameSetup() {
//   const [numPvP, setNumPvP] = useState<number | null>(null);
//   const [playerPieces, setPlayerPieces] = useState<PlayerPiece[]>([]);
//      const boardDetails = [
//     { boardColor: 'blue',  homeEntry: 'y13', gameEntry: 'b1' },
//     { boardColor: 'green',  homeEntry: 'r13', gameEntry: 'g1' },
//     { boardColor: 'red',  homeEntry: 'b13', gameEntry: 'r1' },
//     { boardColor: 'yellow',  homeEntry: 'g13', gameEntry: 'y1' }
// ];

//   const handleStart = (count: number) => {
//     setNumPvP(count);

//     const pieces: PlayerPiece[] = [];

//     for (let i = 0; i < count; i++) {
//       const { boardColor, homeEntry, gameEntry } = boardDetails[i];

//       for (let j = 0; j < 4; j++) {
//         const pieceID = `${boardColor}${j}`;
//         const position = `${j}_${boardColor}`;

//         const newPiece: PlayerPiece = {
//           team: boardColor as PlayerColor,
//           position,
//           score: 0,
//           homeEntry,
//           id: pieceID,
//           gameEntry,
//           status: 0,
//           initialPosition: position,
//         };

//         pieces.push(newPiece);
//       }
//     }

//     setPlayerPieces(pieces);
//   };

//   return (
//     <div>
//       {!numPvP && (
//         <div>
//           <h2>How many players?</h2>
//           {[2, 3, 4].map((n) => (
//             <button key={n} onClick={() => handleStart(n)}>
//               {n} Players
//             </button>
//           ))}
//         </div>
//       )}

//       {numPvP && (
//         <div>
//           <h2>Game with {numPvP} players</h2>

//           {playerPieces.map((piece) => (
//             <div key={piece.id}>
//               <span>{piece.id}</span>
//               {/* Render piece, add click handler etc. */}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
