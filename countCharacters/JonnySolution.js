const testString = 'abbbabac';

// With reduce, hopefully reasonably readable
const countChars = (string) => {
	const charArr = [...string];
  
  return charArr.reduce((acc, item) => {
  	const keyExists = item in acc;
    
    acc[item] = keyExists ? acc[item]+1 : 1;
    return acc;
  }, {});
}

// Code golf version
const countCharsSmaller = (str) =>  [...str].reduce((ac, i) => ({...ac, [i]:ac[i]?ac[i]+1:1}), {});
 
// Run functions
console.log(countChars(testString));
console.log(countCharsSmaller(testString));