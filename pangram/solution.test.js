const { isPangram } = require("./freddieSolution");

describe("isPangram", () => {
  it("should recognise a pangram", () => {
    const realPangram = "The quick brown fox jumps over the lazy dog";
    expect(isPangram(realPangram)).toEqual(true);
  });
  it("should recognise a non-pangram", () => {
    const realPangram = "The quick brown fox jumps over the laz dog";
    expect(isPangram(realPangram)).toEqual(false);
  });
});
