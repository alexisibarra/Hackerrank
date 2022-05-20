import { positionExtremesOfTheX } from "../Utils/positionExtremesOfTheX";

describe("positionExtremesOfTheX", () => {
  it("border case 1", () => {
    const matrix = [
      [2, 7, 8],
      [1, 5, 9],
      [5, 3, 8],
    ];

    positionExtremesOfTheX(matrix, 4, 6, true);

    expect(matrix[0][0]).toBe(2);
    expect(matrix[2][2]).toBe(8);

    expect(matrix[2][0]).toBe(4);
    expect(matrix[0][2]).toBe(6);

    expect(matrix).toStrictEqual([
      [2, 7, 6],
      [1, 5, 9],
      [4, 3, 8],
    ]);
  });
});
