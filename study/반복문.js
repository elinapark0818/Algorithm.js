function findTheBug(word) {

if (word.includes('#')) {
    for (let i=0; i<word.length; i++) {
    return word.indexOf('#') 
    }
}
else {
    return undefined}
}


// 중복되는 수열 구하기...

function makePermutations(str) {  // 'cat'
    let result = '';
    for (let i=0; i<str.length; i++) {
        for (let j=0; j<str.length; j++) {
            result = result + `${str[i]}${str[j]},`;
        }
    }
    return result.slice(0, result.length - 1)
}

makePermutations('cat')

