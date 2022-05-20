import { TSquareMatrix } from "./Types/TSquareMatrix";

type TPositionThree = (s: TSquareMatrix, oneI: number, oneJ: number) => void;

export const positionThree: TPositionThree = (s, oneI, oneJ) => {
  const coordinateMapping: Record<number, number> = {
    0: 2,
    1: 1,
    2: 0,
  };

  s[coordinateMapping[oneI]][coordinateMapping[oneJ]] = 3;
};
