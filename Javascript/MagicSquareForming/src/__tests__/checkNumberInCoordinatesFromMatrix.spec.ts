import { checkNumberInCoordinatesFromMatrix } from "../Utils/checkNumberInCoordinatesFromMatrix";
import { crossTuples } from "../Utils/Constants/crossTuples";

describe("checkNumberInCoordinatesFromMatrix function", () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  it("should return null if the number is not found", () => {
    expect(
      checkNumberInCoordinatesFromMatrix(10, crossTuples, matrix)
    ).toStrictEqual({
      found: false,
      coordinate: [0, 1],
    });
  });

  it("should return a coordinate if the number is found", () => {
    expect(
      checkNumberInCoordinatesFromMatrix(2, crossTuples, matrix)
    ).toStrictEqual({
      found: true,
      coordinate: [0, 1],
    });
    expect(
      checkNumberInCoordinatesFromMatrix(4, crossTuples, matrix)
    ).toStrictEqual({
      found: true,
      coordinate: [1, 0],
    });
    expect(
      checkNumberInCoordinatesFromMatrix(6, crossTuples, matrix)
    ).toStrictEqual({
      found: true,
      coordinate: [1, 2],
    });
    expect(
      checkNumberInCoordinatesFromMatrix(8, crossTuples, matrix)
    ).toStrictEqual({
      found: true,
      coordinate: [2, 1],
    });
  });

  describe("when secondStep is true", () => {
    it("should return a coordinate for the lowest number of the cross after 1 if the number is not found", () => {
      const matrix = [
        [5, 4, 5],
        [1, 5, 9],
        [5, 5, 5],
      ];

      expect(
        checkNumberInCoordinatesFromMatrix(3, crossTuples, matrix, true)
      ).toStrictEqual({
        found: false,
        coordinate: [0, 1],
      });
    });

    it("should return a coordinate for 3 of the cross after 1 if the number is not found", () => {
      const matrix = [
        [5, 3, 5],
        [1, 5, 9],
        [5, 5, 5],
      ];

      expect(
        checkNumberInCoordinatesFromMatrix(3, crossTuples, matrix, true)
      ).toStrictEqual({
        found: true,
        coordinate: [0, 1],
      });
    });
  });
});
