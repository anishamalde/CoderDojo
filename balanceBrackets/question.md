Given a string, balance the brackets by removing unbalanced ones:

`"a(b)c(d))"` should become `"a(b)c(d)"`

`")("` should become `""`

etc.

```
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
```
