// i really can't be bothered creating tests, sue me
const mystring = 'aaaaaabbbacccbbaaaa';

// quite pleased with bringing this down to one line
const count4 = [...mystring].reduce((acc,curr) => 
    acc[curr] ? {...acc, [curr]:acc[curr]+1} : {...acc, [curr]:1}
,{});

// write it out
console.log(count4);
