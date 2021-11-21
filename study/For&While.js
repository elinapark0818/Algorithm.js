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

// 문자열을 입력받아 해당 문자열을 처음부터 한글자씩 다시 작성하기
// 글자가 추가될때마다 부분적으로 완성된 문자열을 전부 이어붙이기

function makeMarginalString(str) {
    // TODO: 여기에 코드를 작성합니다.
    if (!str) {
        return '';
    }
    let result = '';

    for (let i=0; i<str.length; i++) {
        for (let j=0; j<=i; j++) {
        result += str[j];
        }
    }
    return result
}   



function computePower(base, exponent) {
    // 거듭제곱 방법 : a*a , 금지a**, 금지Math.pow(a,2)
    let result = 1;
    if (exponent === 0) {
        return 1
    }
    for (let i=0; i<exponent; i++) {
        result *= base
    }
    return result
}
computePower(2,3)

function getSumOfFactors(num) {
    // TODO: 여기에 코드를 작성합니다.
    // num 만큼 반복하는 반복문을 만들어야해  약수는 num보다 작기 때문
    // 그 안에서 약수를 구해야 하는데, 약수는 num % 약수 === 0  이라는 조건을 성립해야 한다
    // 약수일 경우 임의의 변수에 더해주면 약수의 합을 구할 수 있겠다
    let result = 0;

    for (let i=0; i<=num; i++) {
        if (num % i === 0) {
        result += i
        }
    } return result;
}
// 소수 = prime
// 배수 = multiple
// 약수 = factor
// 최대공약수 = GCD(the Greatest Common Denominator)
// 최소공배수 = LCM(the Lowest Common Multiple)