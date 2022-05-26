type TCountingSort = (arr: number[]) => number[];

const countingSort: TCountingSort = (arr) => {
  const zeroes: number[] = [...Array(100)].fill(0);

  return arr.reduce((acc: number[], element) => {
    acc[element]++;

    return acc;
  }, zeroes);
};

export default countingSort;
