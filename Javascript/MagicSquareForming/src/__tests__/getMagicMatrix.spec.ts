import { formingMagicSquare } from "../formingMagicSquare";

describe("formingMagicSquare function", () => {
  it("should return cost 7", () => {
    const matrix = [
      [5, 3, 4],
      [1, 5, 8],
      [6, 4, 2],
    ];

    expect(formingMagicSquare(matrix)).toEqual(7);
  });

  it("should return cost 1", () => {
    const matrix = [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 5],
    ];

    expect(formingMagicSquare(matrix)).toEqual(1);
  });
});
