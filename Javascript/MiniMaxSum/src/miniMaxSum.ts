const arraySum = (arr: number[]) => arr.reduce((sum, elem) => sum + elem, 0);

const miniMaxSum = (arr: number[]): void => {
  const sortedArr = arr.sort();

  const max = sortedArr.slice(0, 4);
  const min = sortedArr.slice(-4);

  const maxSum = arraySum(max);
  const minSum = arraySum(min);

  console.log(`${maxSum} ${minSum}`);
};
