// How many times does this array contain a reverse of itself?

const testArray = ['xyz', 'zxy', 'zyx', 'yxz', 'xxz', 'zzx', 'xyz'];

// Reverse function
const reverseItem = (s) => {
  return s.split('').reverse().join('');
};

const countMatches1 = () => {
  let count = 0;
  const reversedSet = new Set(
    testArray.map((arrayItem) => reverseItem(arrayItem))
  );
  testArray.forEach((arrayItem) => {
    if (reversedSet.has(arrayItem)) {
      count++;
    }
  });
  return count;
};

const countMatches2 = () => {
  let count = 0;
  const reversedArray = testArray.map((arrayItem) => reverseItem(arrayItem));

  reversedArray.some((item) => {
    if (testArray.includes(item)) {
      count++;
    }
  });
  return count;
};

console.log(countMatches1(), 'method 1');
console.log(countMatches2(), 'method 2');
