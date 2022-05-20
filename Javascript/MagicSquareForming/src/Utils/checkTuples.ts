import { TCoordinate } from "./Types/TCoordinate";

type TCheckTuples = (
  matrix: number[][],
  tuples: TCoordinate[],
  extremeA: number,
  extremeB: number
) => TCoordinate;

export const checkTuples: TCheckTuples = (
  matrix,
  tuples,
  extremeA,
  extremeB
) => {
  const costOfConverting = tuples.map(([tupleI, tupleJ]) => {
    return Math.min(
      Math.abs(matrix[tupleI][tupleJ] - extremeA) +
        Math.abs(matrix[tupleI][tupleJ] - extremeB),
      Math.abs(matrix[tupleI][tupleJ] - extremeB) +
        Math.abs(matrix[tupleI][tupleJ] - extremeA)
    );
  });

  const minCost = Math.min(...costOfConverting);

  const indexOfMinCost = costOfConverting.indexOf(minCost);

  const asdfasdfasdf = tuples[indexOfMinCost];

  return asdfasdfasdf;
};
