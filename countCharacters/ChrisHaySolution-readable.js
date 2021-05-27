// i really can't be bothered creating tests, sue me
const mystring = 'aaaaaabbbacccbbaaaa';
const count = {};

// this is way more readble
for (const item of mystring) {
    count[item] = (count[item] ?? 0) + 1;
}

console.log(count);
