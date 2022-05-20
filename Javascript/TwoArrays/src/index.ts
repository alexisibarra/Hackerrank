const innerTwoArrays = (
  k: number,
  lessThanK: number[],
  potencials: number[]
): string => {
  const [first, ...rest] = lessThanK;

  const difference = k - first;

  const complementary = potencials.findIndex(
    (element) => element >= difference
  );

  if (complementary >= 0) {
    potencials.splice(complementary, 1);

    if (rest.length === 0) {
      return "YES";
    }

    return innerTwoArrays(k, rest, potencials);
  }

  return "NO";
};

const difference = (a: number, b: number) => a - b;

const twoArrays = (k: number, A: number[], B: number[]): string => {
  const sortedA = A.sort(difference);
  const sortedB = B.sort(difference);

  const sumA = sortedA.reduce((sum, item) => sum + item, 0);
  const sumB = sortedB.reduce((sum, item) => sum + item, 0);

  const { greater, potencials } =
    sumA >= sumB
      ? { greater: sortedA, potencials: sortedB }
      : { greater: sortedB, potencials: sortedA };

  const lessThanK = greater.filter((element) => element < k);

  return innerTwoArrays(k, lessThanK, potencials);
};

export default twoArrays;
