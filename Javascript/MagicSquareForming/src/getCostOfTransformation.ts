import { TSquareMatrix } from "./Utils/Types/TSquareMatrix";

export const getCostOfTransformation = (
  s: TSquareMatrix,
  sp: TSquareMatrix
) => {
  let cost = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      cost += Math.abs(s[i][j] - sp[i][j]);
    }
  }

  return cost;
};
