const { findParityOutlier } = require('./PersonsSolution');

describe('findParityOutlier', () => {
  it('should find the outlier when it is an even number', () => {
    const testArray = [2, 4, 0, 100, 4, 11, 2602, 36];
    expect(findParityOutlier(testArray)).toEqual(11);
  });
  it('should find the outlier when it is an odd number', () => {
    const testArray = [160, 3, 1719, 19, 11, 13, -21];
    expect(findParityOutlier(testArray)).toEqual(160);
  });
});
