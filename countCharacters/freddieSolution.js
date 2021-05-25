const countChars = string =>
  string
    .split("")
    .reduce(
      (acc, val) =>
        acc[val] ? { ...acc, [val]: acc[val] + 1 } : { ...acc, [val]: 1 },
      {}
    );

module.exports = {
  countChars,
};
