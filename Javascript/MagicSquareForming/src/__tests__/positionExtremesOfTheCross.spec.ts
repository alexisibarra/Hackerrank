import { positionExtremesOfTheCross } from "../Utils/positionExtremesOfTheCross";

describe("positionExtremesOfTheCross function", () => {
  xit("should position nine when 1 is in north of the cross", () => {
    const matrix = [
      [0, 1, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    positionExtremesOfTheCross(matrix, 1, 9);

    expect(matrix).toStrictEqual([
      [0, 1, 0],
      [0, 0, 0],
      [0, 9, 0],
    ]);
  });

  xit("should position one where the lowest of the cross is in the north, then position nine", () => {
    const matrix = [
      [7, 2, 7],
      [7, 7, 7],
      [7, 7, 7],
    ];

    positionExtremesOfTheCross(matrix, 1, 9);

    expect(matrix).toStrictEqual([
      [7, 1, 7],
      [7, 7, 7],
      [7, 9, 7],
    ]);
  });

  xit("should position nine when 1 is in west of the cross", () => {
    const matrix = [
      [0, 0, 0],
      [1, 0, 0],
      [0, 0, 0],
    ];

    positionExtremesOfTheCross(matrix, 1, 9);

    expect(matrix).toStrictEqual([
      [0, 0, 0],
      [1, 0, 9],
      [0, 0, 0],
    ]);
  });

  xit("should position one where the lowest of the cross is in the west, then position nine", () => {
    const matrix = [
      [7, 7, 7],
      [2, 7, 7],
      [7, 7, 7],
    ];

    positionExtremesOfTheCross(matrix, 1, 9);

    expect(matrix).toStrictEqual([
      [7, 7, 7],
      [1, 7, 9],
      [7, 7, 7],
    ]);
  });

  xit("should position one where the lowest of the cross is in the west, then position nine", () => {
    const matrix3 = [
      [7, 7, 7],
      [7, 7, 2],
      [7, 7, 7],
    ];

    positionExtremesOfTheCross(matrix3, 1, 9);

    expect(matrix3).toStrictEqual([
      [7, 7, 7],
      [9, 7, 1],
      [7, 7, 7],
    ]);
  });

  it("should position one where the lowest of the cross is in the west, then position nine", () => {
    const matrix3 = [
      [2, 9, 8],
      [4, 2, 7],
      [5, 6, 7],
    ];

    positionExtremesOfTheCross(matrix3, 1, 9);

    expect(matrix3).toStrictEqual([
      [2, 9, 8],
      [3, 2, 7],
      [5, 1, 7],
    ]);
  });
});

// 5 3 4
// 1 5 9
// 6 4 2
