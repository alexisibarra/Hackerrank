import { checkTuples } from "../Utils/checkTuples";
import { crossTuples } from "../Utils/Constants/crossTuples";

describe("checkTuples", () => {
  it("should asfdasdfasdf", () => {
    const matrix3 = [
      [2, 9, 8],
      [4, 2, 7],
      [5, 6, 7],
    ];

    expect(checkTuples(matrix3, crossTuples, 1, 9)).toStrictEqual(
      [2, 1]
      // [0, 1],
    );
  });

  it("should asfdasdfasdf", () => {
    const matrix3 = [
      [2, 3, 8],
      [4, 2, 7],
      [5, 1, 7],
    ];

    expect(checkTuples(matrix3, crossTuples, 1, 9)).toStrictEqual(
      [0, 2]
      // [0, 1],
    );
  });
  it("should asfdasdfasdf", () => {
    const matrix3 = [
      [2, 6, 8],
      [4, 2, 7],
      [5, 9, 7],
    ];

    expect(checkTuples(matrix3, crossTuples, 1, 9)).toStrictEqual(
      [0, 1]
      // [2, 0],
    );
  });

  it("should asfdasdfasdf", () => {
    const matrix3 = [
      [2, 1, 8],
      [4, 2, 7],
      [5, 3, 7],
    ];

    expect(checkTuples(matrix3, crossTuples, 1, 9)).toStrictEqual(
      [0, 1]
      // [2, 0],
    );
  });

  it("should asfdasdfasdf", () => {
    const matrix3 = [
      [2, 3, 8],
      [4, 2, 7],
      [5, 6, 7],
    ];

    expect(checkTuples(matrix3, crossTuples, 1, 9)).toStrictEqual(
      [0, 1]
      // [2, 0],
    );
  });
});
