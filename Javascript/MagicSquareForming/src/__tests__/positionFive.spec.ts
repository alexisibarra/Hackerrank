import { positionFive } from "../Utils/positionFive";

describe("positionFive function", () => {
  const matrixWithFiveInTheCenter = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const matrixWithoutFiveInTheCenter = [
    [1, 2, 3],
    [4, 9, 6],
    [7, 8, 9],
  ];

  it("should return a coordinate if the number is found", () => {
    positionFive(matrixWithoutFiveInTheCenter);

    expect(matrixWithoutFiveInTheCenter).toStrictEqual(
      matrixWithFiveInTheCenter
    );
  });
});
