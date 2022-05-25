import { TPascalTriangle } from "./generatePascalsTriangle";

type TPrintTriangle = (triangle: TPascalTriangle) => void;

const printTriangle: TPrintTriangle = (triangle) => {
  triangle.forEach((level) => {
    console.log(level.join(" "));
  });
};

export default printTriangle;
