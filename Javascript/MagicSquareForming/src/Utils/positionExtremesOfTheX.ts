import { TSquareMatrix } from "./Types/TSquareMatrix";
import { checkNumberInCoordinatesFromMatrix } from "./checkNumberInCoordinatesFromMatrix";
import { crossTuples } from "./Constants/crossTuples";

type TPositionExtremesOfTheX = (s: TSquareMatrix) => void;

export const positionExtremesOfTheX: TPositionExtremesOfTheX = (s) => {
  const {
    coordinate: [oneI, oneJ],
  } = checkNumberInCoordinatesFromMatrix(1, crossTuples, s);

  const {
    coordinate: [threeI, threeJ],
  } = checkNumberInCoordinatesFromMatrix(3, crossTuples, s);

  const oneIsNorth = oneI === 0 && oneJ === 1;
  const oneIsWest = oneI === 1 && oneJ === 0;
  const oneIsSouth = oneI === 2 && oneJ === 1;
  const oneIsEast = oneI === 1 && oneJ === 2;

  const threeIsNorth = threeI === 0 && threeJ === 1;
  const threeIsWest = threeI === 1 && threeJ === 0;
  const threeIsSouth = threeI === 2 && threeJ === 1;
  const threeIsEast = threeI === 1 && threeJ === 2;

  if (oneIsNorth) {
    if (threeIsWest) {
      s[0][0] = 8;
      s[0][2] = 6;
      s[2][0] = 4;
      s[2][2] = 2;
    }
    if (threeIsEast) {
      s[0][0] = 6;
      s[0][2] = 8;
      s[2][0] = 2;
      s[2][2] = 4;
    }
  }

  if (oneIsWest) {
    if (threeIsNorth) {
      s[0][0] = 8;
      s[0][2] = 4;
      s[2][0] = 6;
      s[2][2] = 2;
    }
    if (threeIsSouth) {
      s[0][0] = 6;
      s[0][2] = 2;
      s[2][0] = 8;
      s[2][2] = 4;
    }
  }

  if (oneIsSouth) {
    if (threeIsEast) {
      s[0][0] = 2;
      s[0][2] = 4;
      s[2][0] = 6;
      s[2][2] = 8;
    }
    if (threeIsWest) {
      s[0][0] = 4;
      s[0][2] = 2;
      s[2][0] = 8;
      s[2][2] = 6;
    }
  }
  if (oneIsEast) {
    if (threeIsSouth) {
      s[0][0] = 2;
      s[0][2] = 6;
      s[2][0] = 4;
      s[2][2] = 8;
    }
    if (threeIsNorth) {
      s[0][0] = 8;
      s[0][2] = 4;
      s[2][0] = 2;
      s[2][2] = 6;
    }
  }
};
