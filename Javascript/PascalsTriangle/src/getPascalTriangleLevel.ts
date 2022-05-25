import { combinatorial } from "./combinatorial";

type TGetPascalTriangleLevel = (level: number) => number[];

const getPascalTriangleLevel: TGetPascalTriangleLevel = (level: number) => {
  if (level < 0) {
    throw new Error("level must be greater than or equal to 0");
  }

  return [...Array(level + 1)].map((_, index) => combinatorial(level, index));
};

export default getPascalTriangleLevel;
