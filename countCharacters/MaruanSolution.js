// How many times does each character occur in the string?

const testString = "abbbabac";
const testString2 = "";

const characterOccurence = (string) => {
  const testArray = string.split("");
  let answer = {};

  const testSet = new Set(testArray);

  const getOccurrence = (value) => {
    let count = 0;
    testArray.forEach((v) => v === value && count++);
    return count;
  };

  testSet.forEach((item) => {
    let x = getOccurrence(item);
    answer[item] = x;
  });

  return answer;
};

console.log(characterOccurence(testString), "test 1");
console.log(characterOccurence(testString2), "test 2");
