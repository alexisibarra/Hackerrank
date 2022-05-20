import sockMerchant from "../sockMerchant";

describe("sockMerchant function", () => {
  it("", () => {
    expect(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3);
    expect(sockMerchant(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(0);
    expect(sockMerchant(0, [])).toBe(0);
    expect(sockMerchant(1, [2])).toBe(0);
    expect(sockMerchant(2, [2, 2])).toBe(1);
  });
});
