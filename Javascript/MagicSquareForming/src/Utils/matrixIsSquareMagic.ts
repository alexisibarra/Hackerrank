export const matrixIsSquareMagic = (matrix: number[][]): boolean => {
  const n = matrix.length;

  if (n === 0) {
    return false;
  }

  const m = matrix[0].length;

  if (m === 0) {
    return false;
  }

  if (n !== m) {
    return false;
  }

  const magicSum = (n * (n * n + 1)) / 2;

  const columnsAndRowsSumMagicConstant = [...Array(n)].reduce((acc, _, i) => {
    const columnSum = [...Array(n)].reduce((acc, _, j) => {
      return acc + matrix[i][j];
    }, 0);

    const rowSum = [...Array(n)].reduce((acc, _, j) => {
      return acc + matrix[j][i];
    }, 0);

    return acc && columnSum === magicSum && acc && rowSum === magicSum;
  }, true);

  const diagonalSum = [...Array(n)].reduce((acc, _, i) => {
    return acc + matrix[i][i];
  }, 0);

  const diagonalSumMagicConstant = diagonalSum === magicSum;

  const reverseDiagonalSum = [...Array(n)].reduce((acc, _, i) => {
    return acc + matrix[n - 1 - i][i];
  }, 0);

  const reverseDiagonalSumMagicConstant = reverseDiagonalSum === magicSum;

  return (
    columnsAndRowsSumMagicConstant &&
    diagonalSumMagicConstant &&
    reverseDiagonalSumMagicConstant
  );
};
