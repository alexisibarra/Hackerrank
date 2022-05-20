import { TSquareMatrix } from "./types/TSquareMatrix";

export const positionFive = (s: TSquareMatrix) => {
  if (s[1][1] !== 5) {
    s[1][1] = 5;
  }
};
