const makeNumericalAlphabet = str => {
    const arr = str.split("")
    const resArr =[]
    arr.forEach(character => {
        const lowerChar =  character.toLowerCase();
        const regexAZ =  /[a-z]/gmi;
        if(regexAZ.test(lowerChar)){
            const charCodeIndex = lowerChar.charCodeAt(0);
            resArr.push(charCodeIndex - 96)
        }
    });
    return resArr.join(" ");
}
module.exports = {makeNumericalAlphabet}
