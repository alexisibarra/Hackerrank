type TDiagonalDifference = (arr: number[][]) => number;

const diagonalDifference: TDiagonalDifference = (arr) => {
  const n = arr.length;

  const leftToRight = arr.reduce((acc, curr, index) => {
    return acc + curr[index];
  }, 0);

  const rightToLeft = arr.reduce((acc, curr, index) => {
    return acc + curr[n - 1 - index];
  }, 0);

  return Math.abs(leftToRight - rightToLeft);
};

export default diagonalDifference;
