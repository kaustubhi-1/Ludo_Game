import { HomePathEntries } from "../../types/Token";

export const pathArray = [
    'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8', 'r9', 'r10', 'r11', 'r12', 'r13',
    'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'g9', 'g10', 'g11', 'g12', 'g13', 
    'y1', 'y2', 'y3', 'y4', 'y5', 'y6', 'y7', 'y8', 'y9', 'y10', 'y11', 'y12', 'y13', 
    'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11', 'b12', 'b13'
]

export const homePathEntries:HomePathEntries = {
    blue: ['bh1', 'bh2', 'bh3', 'bh4', 'bh5', 'home'],
    yellow: ['yh1', 'yh2', 'yh3', 'yh4', 'yh5', 'home'],
    red: ['rh1', 'rh2', 'rh3', 'rh4', 'rh5', 'home'],
    green: ['gh1', 'gh2', 'gh3', 'gh4', 'gh5', 'home'],
};

export const homePathArray = [
    ...homePathEntries.blue,
    ...homePathEntries.red,
    ...homePathEntries.yellow,
    ...homePathEntries.green
]

export const safePaths = [
  'r1', 'r9', 'b1', 'b9', 'y1', 'y9', 'g1', 'g9',
  ...homePathEntries.blue,
  ...homePathEntries.red,
  ...homePathEntries.yellow,
  ...homePathEntries.green
];

export const playerPieces = [];

const redPath = [...pathArray]; // no change
const greenPath = [...pathArray.slice(pathArray.indexOf('g1')), ...pathArray.slice(0, pathArray.indexOf('g1'))];
const yellowPath = [...pathArray.slice(pathArray.indexOf('y1')), ...pathArray.slice(0, pathArray.indexOf('y1'))];
const bluePath = [...pathArray.slice(pathArray.indexOf('b1')), ...pathArray.slice(0, pathArray.indexOf('b1'))];

// export const playerPaths = {
//   red: redPath,
//   green: greenPath,
//   yellow: yellowPath,
//   blue: bluePath,
// };
export const playerPaths = {
  red: [...redPath, ...homePathEntries.red],
  green: [...greenPath, ...homePathEntries.green],
  yellow: [...yellowPath, ...homePathEntries.yellow],
  blue: [...bluePath, ...homePathEntries.blue],
};
