import { TSquareMatrix } from "./Types/TSquareMatrix";

type TPrintMatrix = (s: TSquareMatrix) => void;

export const printMatrix: TPrintMatrix = (s) => {
  console.log(s.map((row) => row.join(" ")).join("\n"));
  console.log("\n");
};
