import diagonalDifference from "../diagonalDifference";

describe("diagonalDifference function", () => {
  it("should return the absolute difference for a square matrix", () => {
    const matrix = [
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ];

    expect(diagonalDifference(matrix)).toBe(15);
  });

  it("should return the absolute difference for a square matrix with only zeros", () => {
    const matrix = [
      [0, 0],
      [0, 0],
    ];

    expect(diagonalDifference(matrix)).toBe(0);
  });

  it("should return the absolute difference for a square matrix with on negative number ", () => {
    const matrix = [
      [2, -3],
      [4, 10],
    ];

    expect(diagonalDifference(matrix)).toBe(11);
  });

  it("should return the absolute difference for a square matrix with only zeros in the second diagonal", () => {
    const matrix = [
      [7, 0],
      [0, 7],
    ];

    expect(diagonalDifference(matrix)).toBe(14);
  });

  it("should return the absolute difference for a square matrix with only zeros in the main diagonal", () => {
    const matrix = [
      [0, 8],
      [8, 0],
    ];

    expect(diagonalDifference(matrix)).toBe(16);
  });
});
