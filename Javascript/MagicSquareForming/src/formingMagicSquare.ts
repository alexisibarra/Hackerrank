import { positionFive } from "./Utils/positionFive";
import { positionExtremesOfTheCross } from "./Utils/positionExtremesOfTheCross";
import { TSquareMatrix } from "./Utils/Types/TSquareMatrix";
import { positionExtremesOfTheX } from "./Utils/positionExtremesOfTheX";
import { getCostOfTransformation } from "./getCostOfTransformation";
import { printMatrix } from "./Utils/printMatrix";
import { substractMatrices } from "./Utils/substractMatrices";

type TFormingMagicSquare = (s: TSquareMatrix) => number;

const m2 = [
  [2, 9, 4],
  [7, 5, 3],
  [6, 1, 8],
];
const m1 = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
];

export const formingMagicSquare3: TFormingMagicSquare = (s) => {
  const allMagicSquaresOfSize3 = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [2, 7, 6, 9, 5, 1, 4, 3, 8],
  ];

  const sp = JSON.parse(JSON.stringify(s));

  const oneDimensionMatrix = sp.flat();

  const costsOfConverting = allMagicSquaresOfSize3.map((magicSquare) =>
    magicSquare.reduce(
      (acc, curr, index) => acc + Math.abs(oneDimensionMatrix[index] - curr),
      0
    )
  );

  console.log({ costsOfConverting });

  return Math.min(...costsOfConverting);
};

export const formingMagicSquare: TFormingMagicSquare = (s) => {
  const sp = JSON.parse(JSON.stringify(s));

  printMatrix(sp);

  positionFive(sp);

  printMatrix(sp);

  positionExtremesOfTheCross(sp, 1, 9);

  printMatrix(sp);

  positionExtremesOfTheCross(sp, 3, 7, true);

  printMatrix(sp);

  positionExtremesOfTheX(sp);

  // printMatrix(s);
  printMatrix(sp);

  printMatrix(substractMatrices(s, sp));

  return getCostOfTransformation(s, sp);
};
