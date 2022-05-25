import getPascalTriangleLevel from "../getPascalTriangleLevel";

describe("getPascalTriangleLevel function", () => {
  describe("happy path", () => {
    it("level 0", () => {
      expect(getPascalTriangleLevel(0)).toEqual([1]);
    });

    it("level 1", () => {
      expect(getPascalTriangleLevel(1)).toEqual([1, 1]);
    });

    it("level 2", () => {
      expect(getPascalTriangleLevel(2)).toEqual([1, 2, 1]);
    });

    it("level 3", () => {
      expect(getPascalTriangleLevel(3)).toEqual([1, 3, 3, 1]);
    });

    it("level 4", () => {
      expect(getPascalTriangleLevel(4)).toEqual([1, 4, 6, 4, 1]);
    });
  });

  describe("border cases", () => {
    it("should throw an error for negative numbers", () => {
      expect(() => getPascalTriangleLevel(-1)).toThrow(
        "level must be greater than or equal to 0"
      );
    });
  });
});
