import getFormattedHour from "../getFormattedHour";

describe("getFormattedHour function", () => {
  describe("When postmeridian is provided", () => {
    it("should return the formatted hour when hour is 12", () => {
      expect(getFormattedHour(12, "P")).toBe("12");
    });

    it("should return the formatted hour when hour is not 12", () => {
      expect(getFormattedHour(4, "P")).toBe(String(4 + 12));
    });
  });

  describe("When antemeridian is provided", () => {
    it("should return the formatted hour hour is 12", () => {
      expect(getFormattedHour(12, "A")).toBe("00");
    });

    it("should return the formatted hour hour is not 12", () => {
      expect(getFormattedHour(4, "A")).toBe("04");
    });
  });
});
