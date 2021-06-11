// Given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// `const testString = "The sunset sets at twelve o' clock."`

// **Answer:** "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

const makeNumericalAlphabet = (testString) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return testString
    .split("")
    .map((c) => alphabet.indexOf(c.toLowerCase()) + 1)
    .filter((c) => c)
    .join(" ");
};

module.exports = { makeNumericalAlphabet };
