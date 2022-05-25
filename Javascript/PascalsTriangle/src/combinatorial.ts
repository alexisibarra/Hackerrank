import factorial from "./factorial";

export const combinatorial = (n: number, k: number) =>
  factorial(n) / (factorial(k) * factorial(n - k));
