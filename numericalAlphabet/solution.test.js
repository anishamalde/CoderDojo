const { makeNumericalAlphabet } = require('./PersonsSolution');

describe('makeNumericalAlphabet', () => {
  it('should find the outlier when it is an even number', () => {
    const testString = "The sunset sets at twelve o' clock.";
    const result =
      '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11';
    expect(makeNumericalAlphabet(testString)).toEqual(result);
  });

  it('should find the outlier when it is an odd number', () => {
    const testArray = 'I really love coding challenges!';
    const result =
      '9 18 5 1 12 12 25 12 15 22 5 3 15 4 9 14 7 3 8 1 12 12 5 14 7 5 19';
    expect(makeNumericalAlphabet(testArray)).toEqual(result);
  });
});
