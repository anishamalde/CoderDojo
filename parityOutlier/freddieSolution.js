// solution using do/while
const isEven = int => int % 2 === 0;

const findParityOutlier = intergers => {
  const [first, second, third] = intergers;

  const lookingForEven =
    [first, second, third].reduce(
      (acc, item) => (isEven(item) ? acc + 1 : acc),
      0
    ) < 2;

  let i = 0;
  let found = false;
  let value = null;
  do {
    if (lookingForEven) {
      found = isEven(intergers[i]);
      value = intergers[i];
    }

    if (!lookingForEven) {
      found = !isEven(intergers[i]);
      value = intergers[i];
    }
    i++;
  } while (!found);
  return value;
};

module.exports = {
  findParityOutlier,
};
