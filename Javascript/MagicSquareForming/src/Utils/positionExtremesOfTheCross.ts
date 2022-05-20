import { TSquareMatrix } from "./Types/TSquareMatrix";
import { checkNumberInCoordinatesFromMatrix } from "./checkNumberInCoordinatesFromMatrix";
import { crossTuples } from "./Constants/crossTuples";

type TPositionExtremesOfTheCross = (
  s: TSquareMatrix,
  extremeA: number,
  extremeB: number,
  secondStep?: boolean
) => void;

export const positionExtremesOfTheCross: TPositionExtremesOfTheCross = (
  s,
  extremeA,
  extremeB,
  secondStep
) => {
  const {
    found: extremeAIsInTheCross,
    coordinate: [extremeAI, extremeBJ],
  } = checkNumberInCoordinatesFromMatrix(
    extremeA,
    crossTuples,
    s,
    secondStep ? "cross" : undefined
  );

  if (!extremeAIsInTheCross) {
    s[extremeAI][extremeBJ] = extremeA;
  }

  const coordinateMapping: Record<number, number> = {
    0: 2,
    1: 1,
    2: 0,
  };

  s[coordinateMapping[extremeAI]][coordinateMapping[extremeBJ]] = extremeB;
};
