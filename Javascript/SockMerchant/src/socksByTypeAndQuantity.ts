type TMap = Record<number, number>;

type TSocksByTypeAndQuantity = (ar: number[]) => TMap;

const socksByTypeAndQuantity: TSocksByTypeAndQuantity = (ar: number[]) =>
  ar.reduce(
    (acc: TMap, curr) => ({
      ...acc,
      [curr]: (acc[curr] || 0) + 1,
    }),
    {}
  );

export default socksByTypeAndQuantity;
