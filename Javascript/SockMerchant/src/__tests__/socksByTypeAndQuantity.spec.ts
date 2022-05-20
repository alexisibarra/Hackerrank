import socksByTypeAndQuantity from "../socksByTypeAndQuantity";

describe("socksByTypeAndQuantity function", () => {
  it("", () => {
    expect(
      socksByTypeAndQuantity([10, 20, 20, 10, 10, 30, 50, 10, 20])
    ).toStrictEqual({
      10: 4,
      20: 3,
      30: 1,
      50: 1,
    });
    expect(
      socksByTypeAndQuantity([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    ).toStrictEqual({
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
      6: 1,
      7: 1,
      8: 1,
      9: 1,
      10: 1,
    });
    expect(socksByTypeAndQuantity([])).toStrictEqual({});
    expect(socksByTypeAndQuantity([2])).toStrictEqual({ 2: 1 });
    expect(socksByTypeAndQuantity([2, 2])).toStrictEqual({ 2: 2 });
  });
});
