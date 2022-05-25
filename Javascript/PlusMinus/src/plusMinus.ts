const plusMinus = (arr: number[]): void => {
  const total = arr.length;

  const { positive, negative, zeros } = arr.reduce(
    (acc, element) => {
      if (element > 0) {
        return { ...acc, positive: acc.positive + 1 };
      }

      if (element < 0) {
        return { ...acc, negative: acc.negative + 1 };
      }

      return { ...acc, zeros: acc.zeros + 1 };
    },
    { positive: 0, negative: 0, zeros: 0 }
  );

  console.log(positive / total);
  console.log(negative / total);
  console.log(zeros / total);
};
