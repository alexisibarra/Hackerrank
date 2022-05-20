import { formingMagicSquare } from "../formingMagicSquare";
import { matrixIsSquareMagic } from "../Utils/matrixIsSquareMagic";

// 8, 7, 3, 2

describe("formingMagicSquare function", () => {
  xit("test case 0", () => {
    const matrix = [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 5],
    ];

    const cost = formingMagicSquare(matrix);

    // expect(matrixIsSquareMagic(matrix)).toBe(true);

    expect(cost).toBe(1);
  });

  xit("test case 1", () => {
    const matrix = [
      [4, 8, 2],
      [4, 5, 7],
      [6, 1, 6],
    ];

    const cost = formingMagicSquare(matrix);

    // expect(matrixIsSquareMagic(matrix)).toBe(true);

    expect(cost).toBe(4);
  });

  it("test case 2", () => {
    const matrix = [
      [2, 9, 8],
      [4, 2, 7],
      [5, 6, 7],
    ];

    const cost = formingMagicSquare(matrix);

    // expect(matrixIsSquareMagic(matrix)).toBe(true);

    expect(cost).toBe(21);
  });

  xit("test case 3", () => {
    const matrix = [
      [4, 4, 7],
      [3, 1, 5],
      [1, 7, 9],
    ];

    const cost = formingMagicSquare(matrix);

    // expect(matrixIsSquareMagic(matrix)).toBe(true);

    expect(cost).toBe(20);
  });

  xit("test case 6", () => {
    const matrix = [
      [6, 7, 8],
      [7, 6, 2],
      [3, 2, 3],
    ];

    const cost = formingMagicSquare(matrix);

    // expect(matrixIsSquareMagic(matrix)).toBe(true);

    expect(cost).toBe(17);
  });

  xit("test case 7", () => {
    const matrix = [
      [6, 1, 2],
      [7, 2, 6],
      [5, 6, 2],
    ];

    const cost = formingMagicSquare(matrix);

    // expect(matrixIsSquareMagic(matrix)).toBe(true);

    expect(cost).toBe(18);
  });

  xit("test case 8", () => {
    const matrix = [
      [4, 6, 6],
      [2, 4, 1],
      [8, 9, 8],
    ];

    const cost = formingMagicSquare(matrix);

    // expect(matrixIsSquareMagic(matrix)).toBe(true);

    expect(cost).toBe(21);
  });
});
