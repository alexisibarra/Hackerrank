import factorial from "../factorial";

describe("factorial", () => {
  it("0", () => {
    expect(factorial(0)).toEqual(1);
  });
  it("1", () => {
    expect(factorial(1)).toEqual(1);
  });
  it("2", () => {
    expect(factorial(2)).toEqual(2);
  });
  it("3", () => {
    expect(factorial(3)).toEqual(6);
  });
  it("4", () => {
    expect(factorial(4)).toEqual(24);
  });
  it("5", () => {
    expect(factorial(5)).toEqual(120);
  });
  it("6", () => {
    expect(factorial(6)).toEqual(720);
  });
  it("7", () => {
    expect(factorial(7)).toEqual(5040);
  });
  it("8", () => {
    expect(factorial(8)).toEqual(40320);
  });
  it("9", () => {
    expect(factorial(9)).toEqual(362880);
  });
  it("10", () => {
    expect(factorial(10)).toEqual(3628800);
  });
});
