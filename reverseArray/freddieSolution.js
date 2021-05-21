const getReverse = string => string.split("").reverse().join("");

const plusOneAttribute = (obj, key, initialValue = 0) =>
  obj[key] !== undefined ? obj[key] + 1 : initialValue;

const hasReverseCount = stringArray => {
  const reverseCounts = stringArray.reduce((acc, val) => {
    const newAcc = { ...acc };

    if (acc[getReverse(val)] !== undefined) {
      newAcc[getReverse(val)] = 1;
      newAcc[val] = plusOneAttribute(newAcc, val, 1);
      return newAcc;
    }
    newAcc[val] = 0;
    return newAcc;
  }, {});
  return Object.values(reverseCounts).reduce((acc, val) => acc + val, 0);
};

const testArray = ["xyz", "zxy", "zyx", "yxz", "xxz", "zzx", "xyz"];

console.log(hasReverseCount(testArray));
