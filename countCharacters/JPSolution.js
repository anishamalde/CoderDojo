const countChars = (string) => {
  let count = {};

  [...string].map((char) => {
    count[char] = count[char] ? count[char] + 1 : 1;
  });

  return count;
};

module.exports = { countChars };
