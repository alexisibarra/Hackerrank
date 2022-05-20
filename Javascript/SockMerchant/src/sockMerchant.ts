import socksByTypeAndQuantity from "./socksByTypeAndQuantity";

type TSockMerchant = (n: number, ar: number[]) => number;

const sockMerchant: TSockMerchant = (_, ar) => {
  const socksMapping = socksByTypeAndQuantity(ar);

  return Object.values(socksMapping).reduce(
    (acc, curr) => acc + Math.floor(curr / 2),
    0
  );
};

export default sockMerchant;
