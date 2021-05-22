const { countChars } = require("./freddieSolution");

describe("countChars", () => {
  it("should return an object of char counts", () => {
    const testString = "abbbabac";

    expect(countChars(testString)).toEqual({ a: 3, b: 4, c: 1 });
  });
});
