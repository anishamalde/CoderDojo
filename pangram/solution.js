const isLetter = char => /[a-zA-Z]/.test(char);
// borrowed from this source, works for english alphabet.
// https://coderrocketfuel.com/article/how-to-check-if-a-character-is-a-letter-using-javascript

const isPangram = string => {
  const counts = string.split("").reduce((acc, val) => {
    if (isLetter(val)) {
      return {
        ...acc,
        [val.toLowerCase()]: true,
      };
    }
    return acc;
  }, {});

  return Object.keys(counts).length === 26;
};

const realPangram = "The quick brown fox jumps over the laz dog";

const result = isPangram(realPangram);

console.log(result);

module.exports = {
  isPangram,
};
