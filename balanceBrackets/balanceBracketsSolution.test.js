const { balance } = require("./solution");

describe("Problem", () => {
  it("should sovle nubmer1", () => {
    const string = "a(b)c(d))";
    expect(balance(string)).toEqual("a(b)c(d)");
  });

  it("2", () => {
    const string = ")(";
    expect(balance(string)).toEqual("");
  });

  it("3", () => {
    const string = "(((((";
    expect(balance(string)).toEqual("");
  });

  it("4", () => {
    const string = ")a(b)cd(e)";
    expect(balance(string)).toEqual("a(b)cd(e)");
  });
});
