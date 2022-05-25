const factorial = (n: number) => {
  return [...Array(n)].reduce((factorial: number, _, index) => {
    return factorial * (index + 1);
  }, 1);
};

export default factorial;
