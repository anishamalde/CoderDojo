const { makeNumericalAlphabet } = require("./millisandeSolution");

describe("makeNumericalAlphabet", () => {
  it("should convert the characters to numbers", () => {
    const testString = "the sunset sets at twelve o' clock.";
    const result =
      "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";
    expect(makeNumericalAlphabet(testString)).toEqual(result);
  });

  it("should handle a mixture of cases", () => {
    const testArray = "I really love cOdInG cHaLlEnGeS";
    const result =
      "9 18 5 1 12 12 25 12 15 22 5 3 15 4 9 14 7 3 8 1 12 12 5 14 7 5 19";
    expect(makeNumericalAlphabet(testArray)).toEqual(result);
  });

  it("should ignore punctuation", () => {
    const testArray = ":;;;!!! hey";
    const result = "8 5 25";
    expect(makeNumericalAlphabet(testArray)).toEqual(result);
  });
});
