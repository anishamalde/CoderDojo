/* 
  To add your solution to the performance test:
  1: Export your solution as a function with an input 
     for the test string and with the name 'countChars' 
  2: Add the name of the file to solutionNameArray below

  As performance is a non-functional requirement this test will 
  always pass as long as your code finishes, instead this test 
  displays a table comparing the performance of solutions
*/
const solutionNameArray = ['freddieSolution', 'MillieTimSolution',];
const solutionArray = solutionNameArray.map(name => {
  return {
    name,
    func: require(`./${name}`)
  }
});

// TODO: Run test multiple times to obtain an average
const timeFunction = testFunc => {
  const startTime = Date.now();
  testFunc()
  const endTime = Date.now();
  return endTime - startTime;
};

const runPerformanceTest = (testName, testString) => {
  const results = solutionArray.map(({ name, func }) => {
    const timeTaken = timeFunction(() => func.countChars(testString));
    return { name, time: timeTaken };
  })
  const sortedResults = results.sort((a, b) => a.time - b.time);
  console.log(`🚀 ${testName}: ${sortedResults[0].name} is the most performant solution so far! 🚀`)
  console.table(sortedResults);
}

describe('countCharacters performance comparison', () => {
  it('should be performant in the simple scenario', () => {
    const testString = 'abbbabac';
    runPerformanceTest('Simple', testString);
  });

  it('should be performant in the complex scenario', () => {
    const testString = 'abbbabac'.repeat(100000);
    runPerformanceTest('Complex', testString);
  });
});
