const testArray = ['xyz', 'zxy', 'zyx', 'yxz', 'xxz', 'zzx', 'xyz'];

const countReverse = (arr) => {
  let count= 0;
  for(let i = 0; i < arr.length; i++){
    const currentReversed = arr[i].split("").reverse().join("");
    count = arr.includes(currentReversed) ? count+1 : count;
  }
  return count;
};

const countReverseReduce = (arr) => {
	const count = arr.reduce((acc, item, i) => {
  	const currentReversed = arr[i].split("").reverse().join("");
	  return arr.includes(currentReversed) ? acc+1 : acc;
  }, 0);
  return count;
}

const countReverseReduceSmol = (arr) => (arr.reduce((acc, item, i) => (arr.includes(arr[i].split("").reverse().join("")) ? acc+1 : acc), 0));

console.log(countReverse(testArray), "countReverse");
console.log(countReverseReduce(testArray), "countReverseReduce");
console.log(countReverseReduceSmol(testArray), "countReverseReduceSmol");

