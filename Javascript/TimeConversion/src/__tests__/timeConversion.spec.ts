import timeConversion from "../TimeConversion";

describe("timeConversion function", () => {
  it("should convert time properly", () => {
    expect(timeConversion("11:05:45AM")).toBe("11:05:45");
    expect(timeConversion("12:05:45AM")).toBe("00:05:45");
    expect(timeConversion("12:05:45PM")).toBe("12:05:45");
    expect(timeConversion("07:05:45PM")).toBe("19:05:45");
    expect(timeConversion("06:40:03AM")).toBe("06:40:03");
    expect(timeConversion("04:59:59AM")).toBe("04:59:59");
  });
});
