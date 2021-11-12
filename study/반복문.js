function findTheBug(word) {

    if (word.includes('#')) {
        for (let i=0; i<word.length; i++) {
            return word.indexOf('#')
        }
    } return undefined

    // for(let j=0; j<word.length; j++) {
    //     if (word[j] === '#') {
    //         return word.indexOf('#')
    //     }
    // } return undefined
}
findTheBug('afd#sa')



// 이중 반복문 예제 홀수 구구단 (continue 사용)
for (let i=0; i<10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    for (let j=0; j<10; j++) {
        if (j % 2 === 0) {
            continue;
        }
        console.log(i, j, i*j);
    }
}

// 이중 반복문 예제 짝수 구구단 (continue 사용)
for (let i=0; i<10; i++) {
    if (i % 2 === 1) {
        continue;
    }
    for (let j=0; j<10; j++) {
        if (j % 2 === 1) {
            continue;
        }
        console.log(i, j, i*j);
    }
}

// 짝수만 있는 구구단
for (let i=0; i<10; i+=2) {
    for (let j=0; j<10; j+=2) {
        console.log(i, j, i*j)
    }
}
// 홀수만 있는 구구단
for (let i=1; i<10; i+=2) {
    for (let j=1; j<10; j+=2) {
        console.log(i, j, i*j)
    }
}


// 이중 for문 길들이기
// 문자열의 길이만큼 문자열 반복하기
let str = 'cat';
let result = '';    //결과를 담을 변수, string타입으로 리턴

for (let i=0; i<str.length; i++) {
    for (let j=0; j<str.length; j++) {
        result += str[j];
    }
}
console.log(result);    // 'catcatcat'


// 문자열을 새로운 빈 문자열에 문자열의 길이만큼 반복해서 더하기
let str = 'dog';
let result = '';    //결과를 담을 변수, string타입으로 리턴

for (let i=0; i<str.length; i++) {
    for (let j=0; j<=i; j++) {  // 
        result += str[j];
    }
}
console.log(result);    //'ddodog'


//  문자열 내에 중복되는 문자가 있는지 확인하기
function repeatedChar(str) {
    let result = '';

    if (!str) {
        return false;
    }
    for (let i=0; i<str.length; i++) {
        for (let j=i+1; j<str.length; j++) {    // i와 j를 비교해야 하기 때문에! j=i+1을 반복문의 초기값으로 설정한다
            if (str[i] === str[j]) {    // str[i]와 str[j]가 같다면 중복된 문자가 있다는 뜻이므로 true를 리턴한다
                return true;
            }
        }
    }
    return false
}

repeatedChar('hello')
repeatedChar('')