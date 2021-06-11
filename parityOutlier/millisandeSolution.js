// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier"

// `const testArray = [2, 4, 0, 100, 4, 11, 2602, 36]`

const findParityOutlier = (array) => {
  // first work out whether we have an array of evens or odds with the first three to save time
  // don't worry description says there will always be three
  // after the map we'll have all 0 which mean all are odd or all 1 which means it is all even, or there is 1 less of either
  const isOdd =
    array
      .slice(0, 3)
      .map((n) => n % 2)
      .reduce((t, n) => t + n, 0) > 1;
  return array.find((n) => (isOdd ? n % 2 === 0 : n % 2 === 1));
};

module.exports = {
  findParityOutlier,
};
