import { TSquareMatrix } from "./Types/TSquareMatrix";

export const substractMatrices = (s: TSquareMatrix, sp: TSquareMatrix) => {
  const matrix = [...Array(3)].map(() => Array(3).fill(0));

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      matrix[i][j] = s[i][j] - sp[i][j];
    }
  }

  return matrix;
};
