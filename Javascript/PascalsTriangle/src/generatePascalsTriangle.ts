import getPascalTriangleLevel from "./getPascalTriangleLevel";

export type TPascalTriangle = number[][];

type TGeneratePascalsTriangle = (size: number) => TPascalTriangle;

const generatePascalsTriangle: TGeneratePascalsTriangle = (size) =>
  [...Array(size + 1)].reduce(
    (triangle: number[][], _, index) => [
      ...triangle,
      getPascalTriangleLevel(index),
    ],
    []
  );

export default generatePascalsTriangle;
