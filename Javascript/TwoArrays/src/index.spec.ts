import twoArrays from ".";

describe("two Arrays function", () => {
  it("test 1", () => {
    const k = 10;
    const A = [2, 1, 3];
    const B = [7, 8, 9];
    const result = "YES";

    expect(twoArrays(k, A, B)).toBe(result);
  });

  it("test 2", () => {
    const k = 5;
    const A = [1, 2, 2, 1];
    const B = [3, 3, 3, 4];
    const result = "NO";

    expect(twoArrays(k, A, B)).toBe(result);
  });

  it("test 3", () => {
    const k = 91;
    const A = [18, 73, 55, 59, 37, 13, 1, 33];
    const B = [81, 11, 77, 49, 65, 26, 29, 49];
    const result = "NO";

    expect(twoArrays(k, A, B)).toBe(result);
  });

  it("test 4", () => {
    const k = 94;
    const A = [
      84, 2, 50, 51, 19, 58, 12, 90, 81, 68, 54, 73, 81, 31, 79, 85, 39, 2,
    ];
    const B = [
      53, 102, 40, 17, 33, 92, 18, 79, 66, 23, 84, 25, 38, 43, 27, 55, 8, 19,
    ];
    const result = "YES";

    expect(twoArrays(k, A, B)).toBe(result);
  });

  it("test 5", () => {
    const k = 88;
    const A = [66, 66, 32, 75, 77, 34, 23, 35];
    const B = [61, 17, 52, 20, 48, 11, 50, 5];
    const result = "NO";

    expect(twoArrays(k, A, B)).toBe(result);
  });

  it("test 6", () => {
    const k = 45;
    const A = [11, 16, 43, 5, 25, 22, 19, 32, 10, 26, 2, 42, 16, 1];
    const B = [33, 1, 1, 20, 26, 7, 17, 39, 23, 34, 10, 11, 38, 20];
    const result = "NO";

    expect(twoArrays(k, A, B)).toBe(result);
  });

  it("test 7", () => {
    const k = 59;
    const A = [15, 16, 44, 58, 5, 10, 16, 9, 4, 20, 24];
    const B = [37, 45, 41, 46, 8, 23, 59, 57, 51, 44, 59];
    const result = "YES";

    expect(twoArrays(k, A, B)).toBe(result);
  });

  it("test 8", () => {
    const k = 32;
    const A = [28, 14, 24, 25, 2, 20, 1, 26];
    const B = [4, 3, 1, 11, 25, 22, 2, 4];
    const result = "NO";

    expect(twoArrays(k, A, B)).toBe(result);
  });

  it("test 9", () => {
    const k = 57;
    const A = [1, 7, 42, 26, 45, 14];
    const B = [37, 49, 42, 26, 4, 11];
    const result = "NO";

    expect(twoArrays(k, A, B)).toBe(result);
  });

  it("test 10", () => {
    const k = 88;
    const A = [25, 60, 49, 4];
    const B = [65, 46, 85, 34];
    const result = "YES";

    expect(twoArrays(k, A, B)).toBe(result);
  });

  it("test 11", () => {
    const k = 9;
    const A = [2, 1, 1, 4, 1, 7, 3, 4, 3, 7, 3, 1, 3, 5, 6, 7];
    const B = [1, 1, 1, 1, 4, 1, 2, 1, 7, 1, 1, 1, 1, 1, 1, 2];
    const result = "NO";

    expect(twoArrays(k, A, B)).toBe(result);
  });

  it("test 12", () => {
    const k = 70;
    const A = [40];
    const B = [38];
    const result = "YES";

    expect(twoArrays(k, A, B)).toBe(result);
  });

  it("test 13", () => {
    const k = 4;
    const A = [20, 1];
    const B = [1, 1];
    const result = "NO";

    expect(twoArrays(k, A, B)).toBe(result);
  });

  it("test 14", () => {
    const k = 10;
    const A = [10000, 1, 1, 1];
    const B = [1, 1, 1, 1];
    const result = "NO";

    expect(twoArrays(k, A, B)).toBe(result);
  });
});
