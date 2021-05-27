// i really can't be bothered creating tests, sue me
const mystring = ['xyz', 'zxy', 'zyx', 'yxz', 'xxz', 'zzx', 'xyz']

// this is a terrible solution but i wanted to play a little with filters
// thought i'd do a reduce again
const count = mystring.reduce((acc,curr) => {
    // purposely not doing a find on the reverse.. i want to have some fun with filters
    // purposely not making this a function expression as i only wanna do this once
    const rev = curr.split("").reverse().join("");

    // return a count of objects
    return acc[curr] ? {...acc, [curr]:acc[curr]+1} : (acc[rev] ? {...acc, [rev]:acc[rev]+1} : {...acc, [curr]:1})
},{});

// filter it out, fun with ES2017 Obhect,entries which i wanted to play with
const x = Object.entries(count).filter(x => x[1] > 1).reduce((acc,curr) => acc + curr[1], 0);

// write it out
console.log(x);