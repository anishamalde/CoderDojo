const testArray = ['xyz', 'zxy', 'zyx', 'yxz', 'xxz', 'zzx', 'xyz'];

const countReverse = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const currentReversed = arr[i].split('').reverse().join('');
    count = arr.includes(currentReversed) ? count + 1 : count;
  }
  return count;
};

const countReverseReduce = (arr) => {
  const count = arr.reduce((acc, item, i) => {
    const currentReversed = arr[i].split('').reverse().join('');
    return arr.includes(currentReversed) ? acc + 1 : acc;
  }, 0);
  return count;
};

const countReverseReduceSmol = (arr) =>
  arr.reduce(
    (acc, item, i) =>
      arr.includes(arr[i].split('').reverse().join('')) ? acc + 1 : acc,
    0
  );

//@DavidSint: Out of interest, which style would you choose to use on a client project?
// I would probably go with your second one (with explanation comments on the lines before to explain the function), because your third one although cool, is not 'dev friendly' for the next person that comes along to read the code.

//@Freddie
// The second one is a bit more readable I agree.
// For a low level function that shouldn't really break I kind of think this doesn't matter too much, as long as its accompanied with tests which are readable and cover edge cases. That way they provide a plain english explanation of what it is supposed to do, and if it breaks what is going wrong.
// One question I have is why you refer to arr[i] when you already have a reference to the current item? Force of habit?

console.log(countReverse(testArray), 'countReverse');
console.log(countReverseReduce(testArray), 'countReverseReduce');
console.log(countReverseReduceSmol(testArray), 'countReverseReduceSmol');
