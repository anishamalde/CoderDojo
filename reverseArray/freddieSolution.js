const getReverse = string => string.split("").reverse().join("");

const hasReverseCount = stringArray => {
  return stringArray.reduce((acc, val) => {
    return stringArray.find(v => v === getReverse(val)) ? acc + 1 : acc;
  }, 0);
};

module.exports = {
  hasReverseCount,
};
