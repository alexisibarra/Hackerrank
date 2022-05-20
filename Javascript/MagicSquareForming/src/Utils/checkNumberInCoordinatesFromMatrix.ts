import { TCoordinate } from "./Types/TCoordinate";
import { TSquareMatrix } from "./types/TSquareMatrix";

type TGetTuplesAndCheckNumber = (
  n: number,
  tuples: TCoordinate[],
  matrix: TSquareMatrix,
  secondStepFrom?: "cross" | "x"
) => { coordinate: TCoordinate; found: boolean };

export const checkNumberInCoordinatesFromMatrix: TGetTuplesAndCheckNumber = (
  n,
  tuples,
  matrix,
  secondStepFrom
) => {
  return tuples.reduce(
    (acc, coordinate) => {
      const {
        found,
        coordinate: [iFound, jFound],
      } = acc;

      if (found) {
        return acc;
      }

      const [i, j] = coordinate;

      const number = matrix[i][j];
      const numberFound = matrix[iFound][jFound];

      if (number === n) {
        return { coordinate, found: true };
      }

      if (!!secondStepFrom) {
        if (
          (secondStepFrom === "cross" &&
            (numberFound === 1 || numberFound === 9)) ||
          (secondStepFrom === "x" && (numberFound === 2 || numberFound === 8))
        ) {
          return { coordinate, found: false };
        }

        if (
          (secondStepFrom === "cross" && (number === 1 || number === 9)) ||
          (secondStepFrom === "x" && (number === 2 || number === 8))
        ) {
          return { coordinate: acc.coordinate, found: false };
        }
      }

      const foundCoordinate =
        numberFound < number ? acc.coordinate : coordinate;

      return {
        coordinate: foundCoordinate,
        found: false,
      };
    },
    { found: false, coordinate: tuples[0] }
  );
};
