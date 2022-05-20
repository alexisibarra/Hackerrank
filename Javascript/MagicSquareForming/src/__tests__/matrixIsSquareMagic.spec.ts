import { matrixIsSquareMagic } from "../Utils/matrixIsSquareMagic";

describe("matrixIsSquareMagic function", () => {
  describe("positive cases", () => {
    it("should return true", () => {
      const matrix = [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 6],
      ];

      expect(matrixIsSquareMagic(matrix)).toBe(true);
    });

    it("should return true", () => {
      const matrix = [
        [4, 3, 8],
        [9, 5, 1],
        [2, 7, 6],
      ];

      expect(matrixIsSquareMagic(matrix)).toBe(true);
    });

    it("should return true", () => {
      const matrix = [
        [2, 9, 4],
        [7, 5, 3],
        [6, 1, 8],
      ];

      expect(matrixIsSquareMagic(matrix)).toBe(true);
    });

    it("should return true", () => {
      const matrix = [
        [6, 7, 2],
        [1, 5, 9],
        [8, 3, 4],
      ];

      expect(matrixIsSquareMagic(matrix)).toBe(true);
    });
  });

  describe("negative cases", () => {
    it("should return false", () => {
      const matrix = [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 5],
      ];

      expect(matrixIsSquareMagic(matrix)).toBe(false);
    });
    it("should return false", () => {
      const matrix = [
        [4, 8, 2],
        [4, 5, 7],
        [6, 1, 6],
      ];

      expect(matrixIsSquareMagic(matrix)).toBe(false);
    });
    it("should return false", () => {
      const matrix = [
        [2, 9, 8],
        [4, 2, 7],
        [5, 6, 7],
      ];

      expect(matrixIsSquareMagic(matrix)).toBe(false);
    });
  });
});
